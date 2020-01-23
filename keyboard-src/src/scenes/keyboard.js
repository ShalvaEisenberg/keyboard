import { observer, inject } from 'mobx-react';
import Confetti from './../images/confetti.webp';
// import Confetti from './../images/confetti2.gif';
import Upload from './../images/upload.png';
import Cheers from './../images/A.mp3';
import React, { Component } from 'react';
import KeyboardLetters from './../components/keyboard-letters'
import KeyboardTopRows from './../components/keyboard-top-rows'
import KeyboardSideKeys from './../components/keyboard-side-keys'
import RandomWords from 'random-words';
import './keyboard.css';


class Keyboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imgPath: "#",
            inputWord: true,
            progress: 1,
            lettersRight: 0,
            lettersWrong: 0,
            complete: false,
            word: "",
            wordSoFar: "",
            upTo: "",
            valid: true
        }
        this.levelComplete = new Audio(Cheers)

    }

    newWord = () => {
        let newState = {}
        if (this.state.word.length < 2) { newState.valid = false }
        else {
            newState.inputWord = !this.state.inputWord
            newState.valid = true
        }
        this.setState(newState);
    }

    // lang = () => {
    //     let lang;
    //     switch (this.props.Keyboard.lang) {
    //         case "heb":
    //             lang = "עברית"
    //             break;
    //         case "eng":
    //             lang = "english"
    //             break;
    //         case "arb":
    //             lang = "ערבית"
    //             break;
    //         default:
    //     }
    //     return lang
    // }

    fileChangedHandler = (event) => {

        this.setState({ selectedFile: event.target.files[0] })

        let reader = new FileReader();
        reader.onloadend = () => {
            this.setState({ imagePreviewUrl: reader.result });
        }

        reader.readAsDataURL(event.target.files[0])
    }

    sendLetter = (e) => {
        if (this.state.word.length < 1) {
            this.setState({ inputWord: true })
            return;
        }
        let typedLtr = e.currentTarget.textContent.toLowerCase();

        let newState = {};

        if (typedLtr === this.state.word[this.state.wordSoFar.length]) {
            let wordSoFar = this.state.wordSoFar + typedLtr
            setTimeout(() => {
                newState = {
                    upTo: this.state.word[this.state.wordSoFar.length + 1],
                    wordSoFar,
                    lettersRight: this.state.lettersRight + 1,

                }
                if (this.state.word === wordSoFar) {
                    let entireLevelComplete = this.progress()
                    if (!entireLevelComplete) newState.complete = true
                }

                //prob
                this.setState(newState);


            }, 1000);
            return true;
        } else {
            //prob
            this.setState({ lettersWrong: this.state.lettersWrong + 1 })
            navigator.vibrate(100);
            window.navigator.vibrate(100);
            return false
        }
    }
    progress = () => {
        let entireLevelComplete = false;
        let newState = {
            progress: this.state.progress + 1
        }
        if ((this.state.lettersRight / this.state.lettersWrong) > 0.75 && this.state.progress < 8) { // 8 is num of letters on keyboard... must change!!
            if (this.state.progress == this.props.Keyboard.wordsPerLevel) {
                this.levelComplete.play();
                newState.displayLevelUp = true;
                entireLevelComplete = true;
            }

            this.setState(newState)
            this.props.Keyboard.progress = this.props.Keyboard.progress + 1 / this.props.Keyboard.wordsPerLevel;
            return entireLevelComplete;
        } else return entireLevelComplete// this.setState({ progress: this.state.progress - 1 })
    }
    closeGameOverModal = () => {
        this.setState({
            displayLevelUp: false,
            lettersRight: 0,
            lettersWrong: 0,
            imagePreviewUrl: null,
            complete: false,
            inputWord: true,
            word: "",//new RandomWords({ exactly: 1, maxLength: 4 })[0],
            wordSoFar: "",
            upTo: ""
        })
    }

    setNewWord = (e) => {
        let word = e && e.target.value ? e.target.value.toLowerCase() : this.state.word;
        this.setState({
            valid: word.length > 1 ? true : false,
            word,
            wordSoFar: "",
            upTo: word.charAt(0)
        })
        this.props.Keyboard.word = word
    }

    // changeLang = () => {
    //     let nextIndex = this.props.Keyboard.languages.indexOf(this.props.Keyboard.lang) + 1
    //     if (nextIndex >= this.props.Keyboard.languages.length) nextIndex = 0
    //     this.props.Keyboard.lang = this.props.Keyboard.languages[nextIndex]
    // }


    render() {
        let showImg = !this.state.complete && !this.state.inputWord && this.props.Keyboard.progress < 3 ? true : false
        let letters = this.state.wordSoFar ? this.state.wordSoFar.toUpperCase().split("").map((letter, index) => {
            return <div key={index} className={index == this.state.wordSoFar.length - 1 ? "animation" : ""}>{letter}</div>
        }) : ""

        let imagePreview;

        if (this.state.imagePreviewUrl) {
            imagePreview = (<img src={this.state.imagePreviewUrl} alt="icon" />);
        }
        return (
            <div className="keyboard-scene-container">
                <div className="info-box">
                    {/* <div className="btn" onClick={this.changeLang}>{this.lang()}</div> */}
                    <div className="btn" onClick={() => this.setState({ inputWord: true })}>שנה מילה </div>
                    {/* <div>letters right: {this.state.lettersRight}</div>
                    <div>letters wrong: {this.state.lettersWrong}</div>
                    <br /> */}
                    {/* {!this.state.inputWord &&  */}
                    <div className="level">
                        <div className="bar-container"><div className="progress" style={{ width: this.state.progress > 1 ? JSON.stringify((this.state.progress - 1) * 100 / this.props.Keyboard.wordsPerLevel) + "%" : 0 }}></div></div>
                        <strong>
                            {" " + (Math.floor(this.props.Keyboard.progress)) + " "}
                            רמה</strong>
                    </div>
                    {/* } */}
                </div>
                {this.state.complete &&
                    <div className="done-modal-container">
                        <img src={Confetti} />
                        <div className="done-modal">
                            {imagePreview}
                            <div>
                                אני רוצה {this.state.word}!
                            </div>
                            <button className="btn" onClick={this.closeGameOverModal}>עוד מילה!</button>
                        </div>
                    </div>
                }
                {this.state.inputWord &&
                    <div className="which-word-popup">  מילה להקלדה:
                    <input type="text" maxLength="18" autoFocus className="input-word" onFocus={() => this.setState({ valid: true })} onBlur={(e) => this.setNewWord(e)} />
                        {!this.state.valid && <div className="err-msg">נא להוסיף מילה להקלדה</div>}
                        <div className="image-container">
                            {imagePreview}</div>
                        <label className="cabinet custom-file-input">
                            <img src={Upload} />
                            להעלאת תמונה
                        <input type="file" value="" title="" className="file" onChange={this.fileChangedHandler} />
                        </label>
                        <button className="done-btn" onClick={this.newWord}>סיום</button>
                    </div>}


                {showImg && imagePreview}
                {!this.state.complete && <div>
                    <div className="word-container">
                        {!this.state.inputWord && <div className="word-correct">{this.state.word.toUpperCase()}</div>}
                        <div className={this.props.Keyboard.lang == "eng" ? "word-trial" : "word-trial heb"}>
                            {letters}
                        </div>
                    </div>
                    <div className="containercontainer">
                        {/* <KeyboardTopRows/> */}
                        {!this.state.inputWord &&
                            <KeyboardLetters
                                sendLetter={this.sendLetter}
                                // deleteLetter={this.deleteLetter}
                                upTo={this.state.upTo}
                                changeLang={this.changeLang}
                            />}
                        {/* <KeyboardSideKeys/> */}
                    </div>
                </div>}
                {this.state.displayLevelUp && <div className="done-modal-container">
                    <img src={Confetti} />
                    <div className="which-word-popup">
                        כל הכבוד!! הצלחת את השלב

                        <button className="btn" onClick={this.closeGameOverModal}>לשלב הבא</button>
                    </div>
                </div>
                }
            </div>);
    }
}

export default inject('Keyboard')(observer(Keyboard));

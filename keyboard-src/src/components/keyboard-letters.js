// source: https://codepen.io/gschier/pen/VKgyaY
import { observer, inject } from 'mobx-react';
import React, { Component } from 'react';
import soundC from './../media/correct.wav';
import Click from './../media/click.wav';
import star from './../media/star.svg';
import './keyboard-components.css';

class KeyboardLetters extends Component {
  constructor(props) {
    super(props);
    this.state = { currCharObj: "" }

    this.engKeyboard = {
      row1: [{ char: 'Q', appear: false }, { char: 'W', appear: false }, { char: 'E', appear: false }, { char: 'R', appear: false }, { char: 'T', appear: false }, { char: 'Y', appear: false }, { char: 'U', appear: false }, { char: 'I', appear: false }, { char: 'O', appear: false }, { char: 'P', appear: false }],
      row2: [{ char: 'A', appear: false }, { char: 'S', appear: false }, { char: 'D', appear: false }, { char: 'F', appear: false }, { char: 'G', appear: false }, { char: 'H', appear: false }, { char: 'J', appear: false }, { char: 'K', appear: false }, { char: 'L', appear: false },  /*{char: ';', appear: false}*/],
      row3: [{ char: 'Z', appear: false }, { char: 'X', appear: false }, { char: 'C', appear: false }, { char: 'V', appear: false }, { char: 'B', appear: false }, { char: 'N', appear: false }, { char: 'M', appear: false }, /*{ char: ',<', appear: false }, { char: '.>', appear: false }*/]
    }
    this.hebKeyboard = {
      row1: [/*{ char: '/', appear: false },*/  { char: "'", appear: false }, { char: 'ק', appear: false }, { char: 'ר', appear: false }, { char: 'א', appear: false }, { char: 'ט', appear: false }, { char: 'ו', appear: false }, { char: 'ן', appear: false }, { char: 'ם', appear: false }, { char: 'פ', appear: false }],
      row2: [{ char: 'ש', appear: false }, { char: 'ד', appear: false }, { char: 'ג', appear: false }, { char: 'כ', appear: false }, { char: 'ע', appear: false }, { char: 'י', appear: false }, { char: 'ח', appear: false }, { char: 'ל', appear: false }, { char: 'ך', appear: false }, { char: 'ף', appear: false }],
      row3: [{ char: 'ז', appear: false }, { char: 'ס', appear: false }, { char: 'ב', appear: false }, { char: 'ה', appear: false }, { char: 'נ', appear: false }, { char: 'מ', appear: false }, { char: 'צ', appear: false }, { char: 'ת', appear: false }, { char: 'ץ', appear: false }]
    }
    this.arbKeyboard = {
      row1: [{ char: 'ض', appear: false }, { char: 'ص', appear: false }, { char: 'ث', appear: false }, { char: 'ق', appear: false }, { char: 'ف', appear: false }, { char: 'غ', appear: false }, { char: 'ع', appear: false }, { char: 'ه', appear: false }, { char: 'خ', appear: false }, { char: 'ح', appear: false }, { char: 'ج', appear: false }, { char: 'د', appear: false }],
      row2: [{ char: 'ش', appear: false }, { char: 'س', appear: false }, { char: 'ي', appear: false }, { char: 'ب', appear: false }, { char: 'ل', appear: false }, { char: 'ا', appear: false }, { char: 'ت', appear: false }, { char: 'ن', appear: false }, { char: 'م', appear: false }, { char: 'ك', appear: false }, { char: 'ط', appear: false }],
      row3: [{ char: 'ئ', appear: false }, { char: 'ء', appear: false }, { char: 'ؤ', appear: false }, { char: 'ر', appear: false }, { char: 'ﻻ', appear: false }, { char: 'ى', appear: false }, { char: 'ة', appear: false }, { char: 'و', appear: false }, { char: 'ز', appear: false }, { char: 'ظ', appear: false }]
    }
    this.correctLtr = new Audio(soundC);
    this.click = new Audio(Click);
    this.myInput = React.createRef()

  }
  componentWillUnmount() {
    this.click.pause()
  }
  sendLetterNew = (e, char) => {
    if (this.state.currCharObj && this.state.currCharObj === char)
      return //to ensure no more clicks while green
    //prob
    let heightProportion = this.myInput.current.offsetHeight / window.innerHeight
    let widthProportion = this.myInput.current.offsetWidth / window.innerWidth

    let rect = e.target.getBoundingClientRect();
    let xCoord = Math.floor(rect.left * widthProportion)
    let yCoord = Math.floor(rect.top * heightProportion)

    let newState = { currCharObj: char }

    let typedCorrectly = this.props.sendLetter(e)
    if (typedCorrectly) {
      this.click.pause()
      this.correctLtr.play();
      newState.starTop = yCoord - 60;
      newState.starLeft = xCoord
    }

    this.setState(newState)

    setTimeout(() => {
      //prob
      this.setState({
        currCharObj: "",
        starTop: null,
        starLeft: null
      })
    }, 1400);
  }
  sendLetter = (e, char) => {
    this.click.play();

    if (this.state.currCharObj && this.state.currCharObj === char) return //to ensure no more clicks while green

    let heightProportion = this.myInput.current.offsetHeight / window.innerHeight
    let widthProportion = this.myInput.current.offsetWidth / window.innerWidth

    let rect = e.target.getBoundingClientRect();
    let xCoord = Math.floor(rect.left * widthProportion)
    let yCoord = Math.floor(rect.top * heightProportion)

    let doesStarAppear = char == "_" ? true : this.props.upTo.toLowerCase() === char.toLowerCase() ? true : false
    this.setState({
      currCharObj: char,
      starTop: yCoord - 60,
      starLeft: xCoord,
      starAppear: doesStarAppear ? true : false
    })

    let typedCorrectly = this.props.sendLetter(e.currentTarget.textContent.toLowerCase())
    if (typedCorrectly) this.correctLtr.play()
    else return

    setTimeout(() => {
      //prob
      this.setState({
        currCharObj: "",
        starTop: null,
        starLeft: null,
        starAppear: false
      })
    }, 1400);
  }

  setLang = () => {
    let lang = this.engKeyboard;
    if (/^[a-zA-Z]+$/.test(this.props.upTo)) {
      this.props.Keyboard.changeLang("eng");
      lang = this.engKeyboard
    } else if (/^[א-ת]+$/.test(this.props.upTo)) {
      this.props.Keyboard.changeLang("heb");
      lang = this.hebKeyboard
    } else if (/^[\u0600-\u06FF]+$/.test(this.props.upTo)) {
      this.props.Keyboard.changeLang("arb");
      lang = this.arbKeyboard
    }
    return lang;
  }

  setLangAndBoard = () => {
    let lang = this.setLang()
    if (this.state.currCharObj && this.state.currCharObj !== this.props.upTo) return lang

    for (let i = 0; i < 3; i++) { //3 is number of rows
      let level = Math.floor(this.props.Keyboard.progress)
      let numOfLettersPerRow = level

      for (const letter of lang[`row${i + 1}`]) {
        if (letter.char.toLowerCase() === this.props.upTo) {
          letter.appear = true;
        }
        else letter.appear = false;
      }

      let counter = 0;

      while (counter < numOfLettersPerRow) {
        let randIndex = Math.floor(Math.random() * lang[`row${i + 1}`].length)
        if (lang[`row${i + 1}`][randIndex].appear) continue;
        lang[`row${i + 1}`][randIndex].appear = true;
        counter++;
      }

    }
    return lang;
  }

  render() {
    let lang = this.setLangAndBoard()
    return (
      <div className="keyboard" ref={this.myInput}>
        {this.state.starAppear && <img alt={this.props.Keyboard.word} src={star} className="letter-star" style={{ top: this.state.starTop, left: this.state.starLeft, zIndex: "1000" }} />}
        <div className="keyboard__row">
          {lang.row1.map((item) => {
            let kl = ` key--letter `
            let x = this.props.upTo === item.char.toLowerCase() ? ` ${kl} chosen-right ` : ` ${kl} chosen-wrong `

            return <div
              key={item.char}
              onClick={(e) => this.sendLetter(e, item.char)}
              className={this.state.currCharObj === item.char ? x : kl}
              data-char={item.char}>
              {item.appear ? item.char : ' '}</div>
          })}

        </div>
        <br />
        <div className="keyboard__row">
          {lang.row2.map((item) => {
            let kl = ` key--letter `
            let x = this.props.upTo === item.char.toLowerCase() ? ` ${kl} chosen-right ` : ` ${kl} chosen-wrong `

            return <div
              key={item.char}
              onClick={(e) => this.sendLetter(e, item.char)}
              className={this.state.currCharObj === item.char ? x : kl}
              data-char={item.char}>
              {item.appear ? item.char : ''}</div>
          })}
          <div className="key--double" data-key="222">
          </div>
        </div>
        <br />
        <div className="keyboard__row">
          {lang.row3.map((item) => {
            let kl = ` key--letter `
            let x = this.props.upTo === item.char.toLowerCase() ? ` ${kl} chosen-right ` : ` ${kl} chosen-wrong `

            return <div
              key={item.char}
              onClick={(e) => this.sendLetter(e, item.char)}
              className={this.state.currCharObj === item.char ? x : kl}
              data-char={item.char}>
              {item.appear ? item.char : ''}</div>
          })}
          {/* <div className="key--double" data-key="191">
          </div> */}
        </div><br />
        <div className="keyboard__row">
          <div
            style={{ color: 'white' }}
            className={`key--double key--right key--space ` + (e => this.props.upTo.toLowerCase() === e.currentTarget.textContent.toLowerCase() ? ` chosen-right ` : `  `)}
            onClick={(e) => this.sendLetter(e, "_")} data-key="32" data-char=" ">{/*&nbsp;*/"_"}
          </div>
        </div>
      </div>
    );
  }
}

export default inject('Keyboard')(observer(KeyboardLetters));

import { decorate, observable, computed, action } from "mobx"

class Keyboard {
    word = ""
    progress = 1
    languages = ["eng", "heb", "arb"]
    lang = this.languages[0]
    wordsPerLevel = 3

    changeLang = (lang) => {
        console.log("a this.lang: ", this.lang)
        this.lang = lang;
        console.log("b this.lang: ", this.lang)
    }
}

decorate(Keyboard, {
    word: observable,
    wordsPerLevel: observable,
    progress: observable,
    lang: observable,
    languages: observable,
    changeLang: action
})

export default new Keyboard();


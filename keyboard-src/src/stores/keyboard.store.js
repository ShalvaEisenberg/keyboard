import { decorate, observable, action } from "mobx"

class Keyboard {
    word = ""
    progress = 1
    languages = ["eng", "heb", "arb"]
    lang = this.languages[0]
    wordsPerLevel = 3

    changeLang = (lang) => {
        this.lang = lang;
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


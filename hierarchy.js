/* eslint-disable react/jsx-sort-prop-types,react/require-extension,react/wrap-multilines */
class Word {
  constructor(word) {
    this.word = word;
  }
  count() {
    return this.word.length;
  }
  lookup() {
    if (this.language === "Japanese") {
      return `http://jisho.org/search/${this.word}`;
    } else {
      return `https://en.wiktionary.org/wiki/${this.word}`;
    }
  }
}

class EnglishWord extends Word{
  constructor(word) {
    super(word);
    this.language = "English";
  }
}
class JapaneseWord extends Word{
  constructor(word) {
    super(word);
    this.language = "Japanese";
  }
}

const japaneseWord = new JapaneseWord("犬");
const englishWord = new EnglishWord("dog");

console.log(japaneseWord.count());
console.log(japaneseWord.word);
console.log(englishWord.count());
console.log(englishWord.word);
console.log(englishWord.lookup());
console.log(japaneseWord.lookup());

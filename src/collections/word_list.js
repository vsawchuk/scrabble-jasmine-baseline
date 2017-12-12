import Backbone from 'backbone';

import Word from '../models/word';

const WordList = Backbone.Collection.extend({
  model: Word,

  highestScoringWord() {
    // TODO: test and implement
    if (this.models.length === 1) {
      return this.models[0];
    } else if (this.models.length > 1) {
      let maxScoreWord;
      let maxScoreLength = 0;
      let maxScore = 0;
      this.models.forEach((word) => {
        const wordLength = word.attributes.text.length;
        if (this.isHigherScore(word, maxScore) || ((this.isTie(word, maxScore, maxScoreLength)) && this.isWinningWordLength(wordLength, maxScoreLength))) {
          maxScore = word.score();
          maxScoreLength = wordLength;
          maxScoreWord = word;
        }
      });
      return maxScoreWord;
    }
  },

  isHigherScore(newWord, currentHighScore) {
    return newWord.score() > currentHighScore;
  },

  isTie(newWord, currentHighScore, currentMaxLength) {
    return ((newWord.score() === currentHighScore) && (currentMaxLength !== 7));
  },

  isWinningWordLength(newWordLength, currentMaxLength) {
    return (newWordLength === 7) || (newWordLength < currentMaxLength);
  },


  totalScore() {
    return this.models.reduce((score, word) =>  {
      if (word.isValid()) {
        return score + word.score();
      }
    }, 0);
  }
});

export default WordList;

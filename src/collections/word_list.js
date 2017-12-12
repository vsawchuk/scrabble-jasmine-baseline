import Backbone from 'backbone';

import Word from '../models/word';

const WordList = Backbone.Collection.extend({
  model: Word,

  // Returns the Word model with the highest score, according
  // to standard tie-breaking rules
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
        if (word.score() > maxScore) {
          maxScore = word.score();
          maxScoreLength = wordLength;
          maxScoreWord = word;
        } else if ((word.score() === maxScore) && (maxScoreLength !== 7)) {
          if ((wordLength === 7) || (wordLength < maxScoreLength)) {
            maxScore = word.score();
            maxScoreLength = wordLength;
            maxScoreWord = word;
          }
        }
      });
      return maxScoreWord;
    }
  },

  totalScore() {
    // TODO: test and implement
    return 0;
  }
});

export default WordList;

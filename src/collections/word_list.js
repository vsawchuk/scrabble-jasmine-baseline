import Backbone from 'backbone';

import Word from '../models/word';

const WordList = Backbone.Collection.extend({
  model: Word,

  // Returns the Word model with the highest score, according
  // to standard tie-breaking rules
  highestScoringWord() {
    // TODO: test and implement
    return this.at(-1);
  },

  totalScore() {
    // TODO: test and implement
    return 0;
  }
});

export default WordList;

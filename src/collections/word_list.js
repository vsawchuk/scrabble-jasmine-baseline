import Backbone from 'backbone';

import Word from 'models/word';

const WordList = Backbone.Collection.extend({
  model: Word,

  // Wrapper for add, allowing you to pass a string
  // instead of an object containing a string
  addWord: function(word) {
    this.add({text: word});
  },

  highestScoringWord: function() {
    // TODO: test and implement
    return this.at(-1);
  },

  totalScore: function() {
    // TODO: test and implement
    return 0;
  }
});

export default WordList;

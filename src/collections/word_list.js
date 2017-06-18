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

  },
  
  totalScore: function() {

  }
});

export default WordList;

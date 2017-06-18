import _ from 'underscore';
import Backbone from 'backbone';

const LETTERS = {
  'a': 1,
  'b': 3,
  'c': 3,
  'd': 2,
  'e': 1,
  'f': 4,
  'g': 2,
  'h': 4,
  'i': 1,
  'j': 8,
  'k': 5,
  'l': 1,
  'm': 3,
  'n': 1,
  'o': 1,
  'p': 3,
  'q': 10,
  'r': 1,
  's': 1,
  't': 1,
  'u': 1,
  'v': 4,
  'w': 4,
  'x': 8,
  'y': 4,
  'z': 10
};

var Word = Backbone.Model.extend({
  validate: function() {
    var text = this.get('text');

    if (!text) {
      return "Word created without text";
    }

    if (text == '') {
      return "Please type a word first";
    }

    if (text.length > 7) {
      return "Pleas type a word with 7 or fewer letters";
    }

    var badChars = []
    for (let i = 0; i < text.length; i++) {
      if (!_.has(LETTERS, text[i])) {
        badChars.push(text[i]);
      }
    }
    if (badChars.length > 0) {
      return "Invalid characters: " + badChars.join(', ');
    }
  },

  score: function() {
    // TODO: test and implement
    return 0;
  }
});

// DO NOT REMOVE THIS
export default Word;

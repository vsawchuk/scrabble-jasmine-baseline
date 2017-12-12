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

const Word = Backbone.Model.extend({
  initialize() {
    // Always use lowercase letters
    const text = this.get('text');
    if (text && typeof text == 'string') {
      this.set('text', text.toLowerCase());
    }
  },

  // Regarding validations in Backbone:
  //
  // The .validate() method should inspect the current state
  // of the model, and return an error string if it is invalid.
  // The returned error string will be stored in the model's
  // .validationError property. If the model is valid, .validate()
  // should return nothing.
  //
  // The .validate() method will only be run automatically
  // when the model is about to be sent to the serve, i.e.
  // when .save() is called. This behavior is similar to
  // what we encountered in Rails, the difference being in
  // backbone we're much more likely to have models sitting
  // around in memory without persisting them.
  //
  // To run validations manually, you can use the .isValid()
  // method, which returns true or false. If you need to know
  // why the model isn't valid, check out .validationError.
  // See ApplicationView.playWord() for an example of this workflow,
  // and http://backbonejs.org/#Model-validate for documentation.
  validate() {
    const text = this.get('text');

    if (!text) {
      return "Word created without text (how did this happen?)";
    }

    if (typeof text != 'string') {
      return "Text must be a string (how did this happen?)";
    }

    if (text == '') {
      return "Please type a word first";
    }

    if (text.length > 7) {
      return "Please type a word with 7 or fewer letters";
    }

    const badChars = [];
    const validChars = Object.keys(LETTERS);

    for (let i = 0; i < text.length; i++) {
      if (!validChars.includes(text[i])) {
        badChars.push(text[i]);
      }
    }
    if (badChars.length > 0) {
      return "Invalid characters: " + badChars.join(', ');
    }
  },

  score() {
    if (this.isValid()) {
      const splitWord = this.attributes.text.split('');
      const bonus = (splitWord.length === 7) ? 50 : 0;
      let score = splitWord.reduce((score, letter) => score + LETTERS[letter], bonus);
      return score;
    } else {
      return undefined;
    }
  }
});

export default Word;

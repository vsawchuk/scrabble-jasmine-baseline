// Do not remove
import _ from 'underscore';
import Word from 'models/word';

// word -> expected score
const VALID_WORDS = {
  'f': 4,
  'dog': 5,
  'pig': 6,
  'goat': 5,
  'swizzle': 78 // https://en.wikipedia.org/wiki/Pointer_swizzling
}

describe('Word', function() {
  describe('constructor', function() {
    it('Tracks text', function() {
      var word = new Word({
        text: "test"
      });
      expect(word.get('text')).toEqual('test');
    });

    it ('Converts text to lowercase', function() {
      var word = new Word({ text: 'TeSt' });
      expect(word.get('text')).toEqual('test');
    });
  });

  describe('validate', function() {
    it ('permits valid words', function() {
      _.mapObject(VALID_WORDS, (score, text) => {
        var word = new Word({ text: text });
        expect(word.isValid()).toBeTruthy('word: ' + text + ', error: ' + word.validationError);
      });
    });

    it ('permits upper- and lower-case letters', function() {
      _.each(['dog', 'DOG', 'DoG'], (text) => {
        var word = new Word({ text: text });
        expect(word.isValid()).toBeTruthy('word: ' + text + ', error: ' + word.validationError);
      })
    })

    it ('requires text', function() {
      var word = new Word();
      expect(word.isValid()).toBeFalsy();
    });

    it ('requires text to be a string', function() {
      var word = new Word({ text: 333 });
      expect(word.isValid()).toBeFalsy();
    });

    it ('rejects empty words', function() {
      var word = new Word({ text: '' });
      expect(word.isValid()).toBeFalsy();
    });

    it ('rejects words > 7 letters', function() {
      // Boundary condition: 7 letters should work,
      // 8 should fail
      var word = new Word({ text: 'abcdefg' });
      expect(word.isValid()).toBeTruthy();

      var word = new Word({ text: 'abcdefgh' });
      expect(word.isValid()).toBeFalsy();
    });

    it ('rejects things other than letters', function() {
      var words = [
        new Word({ text: '!@#$' }),
        new Word({ text: 'aa&bb' }),
        new Word({ text: '123' })
      ];
      _.each(words, (word) => {
        expect(word.isValid()).toBeFalsy('word: ' + word.get('text'));
      });
    });
  });
});

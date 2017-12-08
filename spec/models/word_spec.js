// Do not remove
import _ from 'underscore';
import Word from 'models/word';

describe('Word', () => {
  describe('constructor', () => {
    it('Tracks text', () => {
      var word = new Word({
        text: "test"
      });

      expect(word.get('text')).toEqual('test');
    });

    it ('Converts text to lowercase', () => {
      const word = new Word({ text: 'TeSt' });

      expect(word.get('text')).toEqual('test');
    });
  });

  describe('validate', () => {
    it ('permits valid words', () => {

      _.each(['f', 'dog', 'pig', 'goat', 'swizzle'], (text) => {
        const word = new Word({ text: text });

        expect(word.isValid()).toBeTruthy('word: ' + text + ', error: ' + word.validationError);
      });
    });

    it ('permits upper- and lower-case letters', () => {
      _.each(['dog', 'DOG', 'DoG'], (text) => {
        const word = new Word({ text: text });

        expect(word.isValid()).toBeTruthy('word: ' + text + ', error: ' + word.validationError);
      })
    })

    it ('requires text', () => {
      const word = new Word();

      expect(word.isValid()).toBeFalsy();
    });

    // DPR: This is a little pedantic, but it's something I
    // actually ran into while implementing the front end
    // so before fixing the problem I added a test
    it ('requires text to be a string', () => {
      const word = new Word({ text: 333 });

      expect(word.isValid()).toBeFalsy();
    });

    it ('rejects empty words', () => {
      const word = new Word({ text: '' });

      expect(word.isValid()).toBeFalsy();
    });

    it ('rejects words > 7 letters', () => {
      // Boundary condition: 7 letters should work,
      // 8 should fail
      let word = new Word({ text: 'abcdefg' });

      expect(word.isValid()).toBeTruthy();

      word = new Word({ text: 'abcdefgh' });

      expect(word.isValid()).toBeFalsy();
    });

    it ('rejects things other than letters', () => {
      const words = [
        new Word({ text: '!@#$' }),
        new Word({ text: 'aa&bb' }),
        new Word({ text: '123' })
      ];
      _.each(words, (word) => {
        expect(word.isValid()).toBeFalsy('word: ' + word.get('text'));
      });
    });
  });

  describe('score', () => {
    it ('Correctly scores simple words', () => {
      // TODO
    });

    it ('Adds 50 points for a 7-letter word', () => {
      // TODO
    });

    it ('Returns undefined if the word is invalid', () => {
      // TODO
    });
  });
});

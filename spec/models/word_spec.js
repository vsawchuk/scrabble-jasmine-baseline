// Do not remove
import Word from '../../src/models/word';

describe('Word', () => {
  describe('constructor', () => {
    it('Tracks text', () => {
      var word = new Word({
        text: 'test',
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
      const testWords = ['f', 'dog', 'pig', 'goat', 'swizzle'];

      testWords.forEach( (text) => {
        const word = new Word({ text: text });

        expect(word.isValid()).toBeTruthy(`word: ${text}, error: ${word.validationError}`);
      });
    });

    it ('permits upper- and lower-case letters', () => {
      const testWords = ['dog', 'DOG', 'DoG'];
      testWords.forEach((text) => {
        const word = new Word({ text: text });

        expect(word.isValid()).toBeTruthy(`word: ${text}, error: ${word.validationError}`);
      });
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
      words.forEach((word) => {
        expect(word.isValid()).toBeFalsy(`word: ${word.get('text')}`);
      });
    });
  });

  describe('score', () => {
    it ('Correctly scores simple words', () => {
      const words = [
        new Word({ text: 'abc' }),
        new Word({ text: 'ikl' }),
      ];
      words.forEach((word) => {
        expect(word.score()).toEqual(7);
      });
    });

    it ('Adds 50 points for a 7-letter word', () => {
      const words = [
        new Word({ text: 'aaaaaaa' }),
        new Word({ text: 'eeeeeee' }),
      ];
      words.forEach((word) => {
        expect(word.score()).toEqual(57);
      });
    });

    it ('Returns undefined if the word is invalid', () => {
      const words = [
        new Word({ text: '#&*' }),
        new Word({ text: 'abc1' }),
        new Word({ text: '' }),
      ];
      words.forEach((word) => {
        expect(word.score()).toEqual(undefined);
      });
    });
  });
});

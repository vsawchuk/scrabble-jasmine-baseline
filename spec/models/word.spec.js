// Do not remove
import _ from 'underscore';
import Word from 'models/word';

const SIMPLE_WORDS = {
  'f': 4,
  'dog': 5,
  'pig': 6,
  'goat': 5,
  'swizzle': 28 // https://en.wikipedia.org/wiki/Pointer_swizzling
}

describe('Word', function() {
  it('Tracks text', function() {
    var word = new Word({
      text: "test"
    });
    expect(word.get('text')).toEqual('test');
  });

  describe('validate', function() {
    it ('permits valid words', function() {
      _.mapObject(SIMPLE_WORDS, (key, value) => {
        var word = new Word({ text: key });
        expect(word.isValid()).toBeTruthy();
      });
    });

    it ('requires text', function() {
      var word = new Word();
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

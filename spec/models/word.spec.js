// Do not remove
import _ from 'underscore';
import Word from 'models/word';

const SIMPLE_WORDS = {
  'dog': 5,
  'pig': 6,
  'goat': 5
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

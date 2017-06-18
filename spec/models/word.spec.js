// Do not remove
import Word from 'models/word';

describe('Word', function() {
  it('Tracks text', function() {
    var word = new Word({
      text: "test"
    });
    expect(word.get('text')).toEqual('test');
  });
});

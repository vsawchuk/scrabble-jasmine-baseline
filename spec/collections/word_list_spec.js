// Do not remove
import WordList from '../../src/collections/word_list';
import Word from '../../src/models/word';

describe('WordList', () => {
  describe('highestScoringWord', () => {
    it ('Returns undefined if there are no words', () =>{
      const wordList = new WordList();

      expect(wordList.highestScoringWord()).toEqual(undefined);
    });

    it ('If there is only one word, return it', () =>{
      const word = new Word({ text: 'word' });
      const wordList = new WordList(word);

      expect(wordList.highestScoringWord()).toEqual(word);
    });

    it ('Returns the highest word if there are two words', () =>{
      const word1 = new Word({ text: 'word' });
      const word2 = new Word({ text: 'aaa' });
      const wordLists = [
        new WordList([word1, word2]),
        new WordList([word2, word1]),
      ];

      wordLists.forEach((wordList) => {
        expect(wordList.highestScoringWord()).toEqual(word1);
      });
    });

    it ('If tied, prefer a word with 7 letters', () =>{
      const word1 = new Word({ text: 'zzzzzz' });
      const word2 = new Word({ text: 'aaaaaah' });

      const wordLists = [
        new WordList([word1, word2]),
        new WordList([word2, word1]),
      ];

      wordLists.forEach((wordList) => {
        expect(wordList.highestScoringWord()).toEqual(word2);
      });
    });

    it ('If tied and no word has 7 letters, prefers the word with fewer letters', () =>{
      const word1 = new Word({ text: 'z' });
      const word2 = new Word({ text: 'abcde' });

      const wordLists = [
        new WordList([word1, word2]),
        new WordList([word2, word1]),
      ];

      wordLists.forEach((wordList) => {
        expect(wordList.highestScoringWord()).toEqual(word1);
      });
    });

    it ('Returns the first word of a tie with same letter count', () =>{
      const word1 = new Word({ text: 'z' });
      const word2 = new Word({ text: 'q' });

      const wordLists = [
        new WordList([word1, word2]),
        new WordList([word2, word1]),
      ];

      wordLists.forEach((wordList) => {
        expect(wordList.highestScoringWord()).toEqual(wordList.models[0]);
      });
    });
  });

  describe('totalScore', () =>{
    // TODO - what interesting cases are there?
  });
});

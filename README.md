# Backbone Scrabble / Testing JavaScript with Jasmine

## Introduction

This project contains an implementation of our classic Scrabble project, this time as a Backbone single-page-application. We'll use it to demonstrate the fundamentals of testing JavaScript with Jasmine. It is built on top of the standard Ada WebPack setup.

This is an individual exercise. Collaboration is of course welcome, but each of you should write your own code. No PR is required for this exercise.

### Learning Goals
- Write tests in JavaScript using Jasmine


### Setup

#### Installation
```sh
git clone <projct url>
cd scrabble-jasmine-baseline
npm install
```

#### Run the Server
```sh
npm start
```

Check out the application's features at localhost:8081.

#### Run the Tests
```sh
npm test
```

## Exercise: Testing Scrabble

Start by spending some time reading through the code.
- How is the application set up, and what are the main workflows?
- How is this similar to Backbone projects you've written in the past?
- How does this code compare to your previous Scrabble implementation?

All of the *view code* for this application should already be functional - you shouldn't need to change anything under `src/views`, `src/app.js`, or `build`.

One of the big differences with previous Backbone projects is the amount of logic contained in the models. Both `Word` and `WordList` have several complex helper functions.

Your job is to use a test-driven development workflow to write the incomplete methods in this project. In particular, you'll need to test and implement:
- `Word.score()`
- `WordList.highestScoringWord()`
- `WordList.totalScore()`

While all tests should be written from scratch, once you've got them you should feel free to borrow the function code from previous projects. The learning goal here is to get experience testing JavaScript via Jasmine, not to practice implementing Scrabble for the third time.

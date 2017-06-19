import $ from 'jquery';
import _ from 'underscore';

import WordList from 'collections/word_list';
import ApplicationView from 'views/application_view';

$(document).ready(function() {
  var wordList = new WordList();
  var application = new ApplicationView({
    model: wordList,
    el: $('#application')
  });
  application.render();
});

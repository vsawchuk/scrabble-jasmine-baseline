import $ from 'jquery';

import WordList from './collections/word_list';
import ApplicationView from './views/application_view';

$(document).ready(function() {
  const wordList = new WordList();
  const application = new ApplicationView({
    model: wordList,
    el: $('#application')
  });
  application.render();
});

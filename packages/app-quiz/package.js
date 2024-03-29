Package.describe({
  name: 'app-quiz',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');
  api.use('ecmascript');
  api.use('templating', 'client');
  api.use('deps');
  api.use('ejson');
  api.use('session');

  api.use('app-design-elements');

  api.export(['TakeQuiz']);

  api.addFiles('app-quiz.less', 'client');
  api.addFiles('app-quiz.html', 'client');
  api.addFiles('app-quiz.js', 'client');


});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('app-quiz');
  api.addFiles('app-quiz-tests.js');
});

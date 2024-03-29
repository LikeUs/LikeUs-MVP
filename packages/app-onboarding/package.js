
Package.describe({
  name: 'app-onboarding',
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
  api.versionsFrom('1.2.0.2');
  api.use('ecmascript');
  api.use('templating', 'client');
  api.use('deps');
  api.use('ejson');


  api.use('app-design-elements');

  api.use('app-quiz');
  api.use('app-coming-soon');


  api.export(['RunOnboarding']);

  api.addFiles('onboarding.html', 'client');
  api.addFiles('onboarding.js', 'client');
  api.addFiles('onboarding.less', 'client');

});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('onboarding');
  api.addFiles('onboarding-tests.js');
});

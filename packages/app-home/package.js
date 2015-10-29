Package.describe({
  name: 'app-home',
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

  api.use('templating');

  api.use('kadira:flow-router');
  api.use('kadira:blaze-layout');

  api.use('app-design-elements');

  api.addFiles('home.html', 'client');
  api.addFiles('home.js', 'client');
  api.addFiles('home.less', 'client');
});

Package.onTest(function(api) {
});

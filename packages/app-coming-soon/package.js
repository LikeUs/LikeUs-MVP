Package.describe({
  name: 'app-coming-soon',
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
  api.use('fourseven:scss');
  api.addFiles('app-coming-soon.js', 'client');
  api.addFiles('app-coming-soon.html', 'client');

  api.export('ComingSoon');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('app-coming-soon');
  api.addFiles('app-coming-soon-tests.js');
});

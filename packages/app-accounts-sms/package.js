Package.describe({
  name: 'app-accounts-sms',
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
  api.use('dispatch:accounts-sms');
  api.imply('dispatch:accounts-sms');
  api.addFiles('app-accounts-sms.js', 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('app-accounts-sms');
  api.addFiles('app-accounts-sms-tests.js');
});

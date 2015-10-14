Package.describe({
  name: 'app-design-elements',
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
  api.use('semantic:ui-css');
  api.use('less');
  api.imply('semantic:ui-css');
  api.imply('less');

  api.addFiles('fonts.less', 'client');
  api.addFiles('colors.import.less', 'client', {isImport: true});

  api.addAssets([
    'fonts/Quicksand-BoldItalic.otf',
    'fonts/Quicksand-Bold.otf',
    'fonts/Quicksand-Italic.otf',
    'fonts/Quicksand-Regular.otf',
  ], 'client');

});

Package.onTest(function(api) {});

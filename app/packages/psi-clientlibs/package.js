Package.describe({
  name: 'psi-clientlibs',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function onUse(api) {
  api.addFiles('.npm/package/node_modules/normalize.css/normalize.css');
});

Npm.depends({
  'normalize.css': '3.0.2'
});
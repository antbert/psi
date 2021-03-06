Package.describe({
  name: 'psi-clientlibs',
  version: '0.0.1',
  summary: 'This package used to handle frontend dependencies',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function onUse(api) {
  api.addFiles([
    '.npm/package/node_modules/normalize.css/normalize.css',
    '.npm/package/node_modules/html5shiv/dist/html5shiv.js'
  ], 'client');
});

Npm.depends({
  'normalize.css': '3.0.2',
  'html5shiv': '3.7.2'
});
Package.describe({
  name: 'psi-clientlibs',
  version: '0.0.1',
  summary: 'This package used to handle frontend dependencies like normalize',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function onUse(api) {
  api.addFiles([
    '.npm/package/node_modules/normalize.css/normalize.css',
    'globalConstants.js'
  ], ['client']);

  api.export('Globals', ['client']);
});

Npm.depends({
  'normalize.css': '3.0.2'
});
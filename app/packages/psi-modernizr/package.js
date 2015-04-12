Package.describe({
  name: 'psi-modernizr',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use([
    'iron:router'
  ]);
  api.use([
    'templating'
  ], 'client');
  api.addFiles(['lib/modernizr.js'], ['server']);
  api.addFiles(['lib/modernizr.html'], ['client']);
});

/*Package.onTest(function(api) {
});*/

Npm.depends({
  'modernizr': '3.0.0-alpha.3'
});
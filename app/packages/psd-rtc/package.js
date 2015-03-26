Package.describe({
  name: 'psd-rtc',
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

  api.use([
    'iron:router',
    'templating'
  ], 'client');

  api.addFiles([
    'lib/hooks.js',
    'lib/routes.js'
  ]);

  api.addFiles([
    'lib/usermedia.js',
    '.npm/package/node_modules/peerjs/dist/peer.js',
    'lib/client/templates/rtc.html',
    'lib/client/templates/rtc.js'
  ], ['client']);

});

Package.onTest(function onTest(api) {
});

Npm.depends({
  'peerjs': '0.3.9'
});
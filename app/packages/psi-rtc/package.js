Package.describe({
  name: 'psi-rtc',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function onUse(api) {
  api.use([
    'grigio:babel',
    'psi-core',
    'underscore'
  ]);

  api.use([
    'iron:router',
    'templating'
  ], 'client');

  api.addFiles([
    'lib/isomorphic/routes/route-hooks.es6.js',
    'lib/isomorphic/routes/routes.js'
  ]);

  api.addFiles([
    'lib/usermedia.js',
    '.npm/package/node_modules/peerjs/dist/peer.js',
    'lib/client/templates/rtc.html',
    'lib/serverConfig.js',
    'lib/client/templates/rtc.es6.js',
    'lib/client/templates/rtc.helpers.es6.js',
    'lib/client/rtc/peer.es6.js'
  ], ['client']);
});

//Package.onTest(function onTest(api) {});

Npm.depends({
  'peerjs': '0.3.9'
});

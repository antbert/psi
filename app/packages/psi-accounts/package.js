Package.describe({
  name: 'psi-accounts',
  // Short two-sentence summary.
  summary: 'Auth pages + landing',
  // Version number.
  version: '0.0.1'
});

Package.onUse(function (api) {
  api.use([
    'iron:router',
    'templating',
    'service-configuration',
    'mquandalle:jade'
  ], 'client');

  api.addFiles([
    'lib/routes.js'
  ]);

  api.addFiles([
    'lib/config.js'
  ], ['server']);

  var TEMPLATES = 'lib/client/templates/';

  api.addFiles([
    TEMPLATES + '/landing.jade',
    TEMPLATES + '/landing-helpers.js',
    TEMPLATES + '/login.jade',
    TEMPLATES + '/login-events.js',
    TEMPLATES + '/login-helpers.js'
  ], ['client']);
});

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

  api.addFiles([
    'lib/client/templates/landing.jade',
    'lib/client/templates/landing-helpers.js',
    'lib/client/templates/login.jade',
    'lib/client/templates/login-events.js'
  ], ['client']);
});

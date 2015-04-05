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
    TEMPLATES + '/landing/landing.jade',
    TEMPLATES + '/landing/landing-helpers.js',
    TEMPLATES + '/login/login.jade',
    TEMPLATES + '/login/login-events.js',
    TEMPLATES + '/login/login-helpers.js',
    TEMPLATES + '/registration/userRegister.jade',
    TEMPLATES + '/registration/userRegister-events.js',
    TEMPLATES + '/registration/userRegister-helpers.js'
  ], ['client']);
});

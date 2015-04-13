Package.describe({
  name: 'psi-accounts',
  summary: 'Auth pages + landing',
  version: '0.0.1'
});

Package.onUse(function (api) {
  api.versionsFrom('1.0.2.1');
  
  api.use([
    'grigio:babel',
    'accounts-password',
    'mquandalle:jade',
    'underscore',
    'psi-core'
  ]);

  api.use([
    'service-configuration'
  ], ['server']);

  api.use([
    'iron:router',
    'templating'
  ], ['client']);

  api.addFiles([
    'lib/isomorphic/routes/route-hooks.es6.js',
    'lib/isomorphic/routes/routes.js'
  ]);

  api.addFiles([
    'lib/server/account-service-configuration.js',
    'lib/server/registration-validation.es6.js',
  ], ['server']);

  var TEMPLATES = 'lib/client';
  api.addFiles([
    TEMPLATES + '/landing/landing.jade',
    TEMPLATES + '/landing/landing-helpers.js',
    TEMPLATES + '/login/login.jade',
    TEMPLATES + '/login/login-events.es6.js',
    TEMPLATES + '/login/login-helpers.js',
    TEMPLATES + '/registration/userRegister.jade',
    TEMPLATES + '/registration/field.es6.js',
    TEMPLATES + '/registration/validator.es6.js',
    TEMPLATES + '/registration/userRegister-events.es6.js',
    TEMPLATES + '/registration/userRegister-helpers.js'
  ], ['client']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('psi-accounts');
  api.addFiles('psi-profiles-tests.js');
});
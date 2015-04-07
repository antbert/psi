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
    'underscore'
  ]);

  api.use([
    'service-configuration'
  ], ['server']);

  api.use([
    'iron:router',
    'templating',
    'psi-clientlibs'
  ], ['client']);

  api.addFiles([
    'lib/routes.js'
  ]);

  api.addFiles([
    'lib/config.js',
    'lib/registrationValidation.es6.js'
  ], ['server']);

  var TEMPLATES = 'lib/client/templates';
  api.addFiles([
    TEMPLATES + '/landing/landing.jade',
    TEMPLATES + '/landing/landing-helpers.js',
    TEMPLATES + '/login/login.jade',
    TEMPLATES + '/login/login-events.es6.js',
    TEMPLATES + '/login/login-helpers.js',
    TEMPLATES + '/registration/userRegister.jade',
    TEMPLATES + '/registration/userRegister-events.es6.js',
    TEMPLATES + '/registration/userRegister-helpers.js'
  ], ['client']);
});

Package.describe({
  name: 'psi-profiles',
  version: '0.0.1',
  summary: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.1');
  api.use([
    'psi-core',
    'psi-clientlibs',
    'grigio:babel',
    'underscore',
    'iron:router'
  ]);

  api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');

  api.addFiles([
    'lib/route-hooks.es6.js',
    'lib/routes.js'
  ]);

  api.addFiles([
    'lib/client/userProfile.html',
    'lib/client/helpers.es6.js',
    'lib/client/userdata-subscription.js'
  ], ['client']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('psi-profiles');
  api.addFiles('psi-profiles-tests.js');
});

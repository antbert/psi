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
    'service-configuration'
  ], 'client');

  api.addFiles([
    'lib/routes.js'
  ]);

  api.addFiles([
    'lib/config.js'
  ], ['server']);

  api.addFiles([
    'lib/client/templates/landing.html',
    'lib/client/templates/landing.js',
    'lib/client/templates/login.html',
    'lib/client/templates/login.js'
  ], ['client']);
});

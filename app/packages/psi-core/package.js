Package.describe({
  name: 'psi-core',
  version: '0.0.1',
  summary: 'Core functionality of the project',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.1');

  api.use(['templating']);

  api.addFiles([
    'lib/globalConstants.js'
  ]);

  api.export('Globals');

  api.addFiles([
    'lib/client/header/header.html',
    'lib/client/navigation/navigation.html',
    'lib/client/helpers/user-helpers.js'
  ], ['client']);
});
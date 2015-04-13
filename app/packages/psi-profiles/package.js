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

  api.use([
    'minimongo',
    'mongo-livedata',
    'templating'
  ], 'client');

  api.addFiles([
    'lib/isomorphic/routes/route-hooks.es6.js',
    'lib/isomorphic/routes/routes.js'
  ]);

  api.addFiles([
    'lib/client/user-profile/userProfile.html',
    'lib/client/user-profile/helpers.es6.js',

    'lib/client/company-profile/companyProfile.html',
    'lib/client/company-profile/vacancies/vacancies.html',
    'lib/client/company-profile/user-list/user-list.html',
    'lib/client/company-profile/user-list/user-list-helpers.es6.js'

  ], ['client']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('psi-profiles');
  api.addFiles('psi-profiles-tests.js');
});

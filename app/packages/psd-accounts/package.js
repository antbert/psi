Package.describe({
  // Short two-sentence summary.
  summary: 'Auth pages + landing',
  // Version number.
  version: '0.0.1'
});

Package.onUse(function (api) {

	api.use([
		'iron:router',
		'templating'
	], 'client');

	api.addFiles('lib/routes.js');
	api.addFiles([
		'lib/client/templates/landing.html',
		'lib/client/templates/login.html',
		'lib/client/templates/landing.js'
	], ['client']);
	
});


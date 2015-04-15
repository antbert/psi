Package.describe({
  name: 'psi-modernizr',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.registerBuildPlugin({
  name: 'modernizeBuild',
  use: [],
  sources: [
    'build.js'
  ],
  npmDependencies: {
    'modernizr': '3.0.0-alpha.3'
  }
});
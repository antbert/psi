var modernizr = Npm.require('modernizr');

function processModernizr() {
  if(processModernizr.cache) {
    modernizr.build({}, function (result) {
      processModernizr.cache = result;
      this.response.end(processModernizr.cache);
    });
  } else {
    this.response.end(processModernizr.cache);
  }
}

Meteor.startup(function () {  
  Router.route('/meteor/build.js', function () {
    processModernizr.call(this);    
  }, {where: 'server'});
});
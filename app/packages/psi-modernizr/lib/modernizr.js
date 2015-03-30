//see https://github.com/Modernizr/Modernizr/blob/master/lib/config-all.json
Meteor.startup(function () {
  var modernizr = Npm.require('modernizr');

  function processModernizr() {
    var that = this;
    if(!processModernizr.cache) {
      modernizr.build({}, function (result) {
        processModernizr.cache = result;
        that.response.end(processModernizr.cache);
      });
    } else {
      this.response.end(processModernizr.cache);
    }
  }

  Router.route('/meteor/build.js', function () {
    processModernizr.call(this);
  }, {where: 'server'});
});
//see https://github.com/Modernizr/Modernizr/blob/master/lib/config-all.json
var config = {
  'feature-detects': [
    'video',
    'video/autoplay',
    'video/loop',
    'video/preload',
    'webrtc/datachannel',
    'webrtc/getusermedia',
    'webrtc/peerconnection'
  ]
};

Meteor.startup(function () {
  var modernizr = Npm.require('modernizr');

  function processModernizr() {
    var that = this;
    if(!processModernizr.cache) {
      modernizr.build(config, function (result) {
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
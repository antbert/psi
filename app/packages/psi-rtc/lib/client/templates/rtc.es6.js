/* global IceServers: true */

var config = {
  iceServers: IceServers,
  secure: true,
  debug: 3
};

var localPeer = new Peer({
  host: 'pseudo-interview-signal.herokuapp.com',
  port: 80,
  config: config
});

localPeer.on('open', function(id) {
  console.log('My peer ID is: ' + id);
});

localPeer.on('call', function(call) {
  navigator.getUserMedia(c, function(s) {
    var local = document.getElementById('local-video');
    local.src = URL.createObjectURL(s);
    call.answer(s);
  }, function(e) {
    console.log(e);
  });
  call.on('stream', function(stream) {
    var video = document.getElementById('remote-video');
    video.src = URL.createObjectURL(stream);
  });
});

var c = {
  audio: true,
  video: true
};

Template.rtc.events({
  'click .chat-btn': function(event, template) {
    var remoteId = template.find('.input-message').value;
    navigator.getUserMedia(c, function(stream) {
      var local = document.getElementById('local-video');
      local.src = URL.createObjectURL(stream);
      var call = localPeer.call(remoteId, stream);
      call.on('stream', function(remoteStream) {
        var video = document.getElementById('remote-video');
        video.src = URL.createObjectURL(remoteStream);
      });
    }, function(err) {
      console.log(err);
    });
  }
});
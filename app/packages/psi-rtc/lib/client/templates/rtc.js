var config = {
  'iceServers': [{
    url: 'stun:stun01.sipphone.com'
  }, {
    url: 'stun:stun.ekiga.net'
  }, {
    url: 'stun:stun.fwdnet.net'
  }, {
    url: 'stun:stun.ideasip.com'
  }, {
    url: 'stun:stun.iptel.org'
  }, {
    url: 'stun:stun.rixtelecom.se'
  }, {
    url: 'stun:stun.schlund.de'
  }, {
    url: 'stun:stun.l.google.com:19302'
  }, {
    url: 'stun:stun1.l.google.com:19302'
  }, {
    url: 'stun:stun2.l.google.com:19302'
  }, {
    url: 'stun:stun3.l.google.com:19302'
  }, {
    url: 'stun:stun4.l.google.com:19302'
  }, {
    url: 'stun:stunserver.org'
  }, {
    url: 'stun:stun.softjoys.com'
  }, {
    url: 'stun:stun.voiparound.com'
  }, {
    url: 'stun:stun.voipbuster.com'
  }, {
    url: 'stun:stun.voipstunt.com'
  }, {
    url: 'stun:stun.voxgratia.org'
  }, {
    url: 'stun:stun.xten.com'
  }, {
    url: 'turn:numb.viagenie.ca',
    credential: 'muazkh',
    username: 'webrtc@live.com'
  }, {
    url: 'turn:192.158.29.39:3478?transport=udp',
    credential: 'JZEOEt2V3Qb0y27GRntt2u2PAYA=',
    username: '28224511:1379330808'
  }, {
    url: 'turn:192.158.29.39:3478?transport=tcp',
    credential: 'JZEOEt2V3Qb0y27GRntt2u2PAYA=',
    username: '28224511:1379330808'
  }],
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

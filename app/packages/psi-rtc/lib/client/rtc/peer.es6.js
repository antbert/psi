/**
 * Created by Aleh_Atsman on 4/13/2015.
 */
/* global IceServers: false, localPeer: true */

Meteor.startup(function() {
  Accounts.onLogin(function() {
    localPeer = new PeerWrapper({
      host: 'pseudo-interview-signal.herokuapp.com',
      port: 80,
      config: {
        iceServers: IceServers,
        secure: false,
        debug: 3
      }
    });
  });
});

class PeerWrapper {
  constructor(config) {
    this.config = config;
    this.peer = this.createPeer(config);
  }

  call(remotePeerId) {
    getUserMedia(function(stream) {
      showLocalVideo(stream);
      var call = this.peer.call(remotePeerId, stream);
      showRemoteVideoOnStream(call);
    }, errorHandler);
  }

  createPeer() {
    var peer = new Peer(this.config);
    peer.on('open', onPeerOpen);
    peer.on('call', onPeerCall);
    peer.on('disconnected', _.partial(onPeerDisconnected, this));
    peer.on('error', errorHandler);
    return peer;
  }
}

function onPeerOpen(id) {
  console.log('My peer ID is: ' + id);
  Meteor.users.update(Meteor.userId(), {
    $set: {
      'profile.peerId': id
    }
  });
}

function onPeerCall(call) {
  getUserMedia(function(stream) {
    showLocalVideo(stream);
    call.answer(stream);
  }, errorHandler);
  showRemoteVideoOnStream(call);
}

function onPeerDisconnected(peerWrapper) {
  console.log('Peer is disconnected');
  if(!this.destroyed) {
    this.reconnect();
  }
  if(!this.id) {
    peerWrapper.peer = peerWrapper.createPeer();
  }
}

function errorHandler(error) {
  console.log(error);
}

function showRemoteVideoOnStream(call) {
  call.on('stream', showRemoteVideo);
}

function showLocalVideo(stream) {
  showVideo('#local-video', stream);
}

function showRemoteVideo(stream) {
  showVideo('#remote-video', stream);
}

function showVideo(videoSelector, stream) {
  var video = $(videoSelector);
  video.src = createUrl(stream);
}

function getUserMedia(callback, err) {
  navigator.getUserMedia({audio: true, video: true}, callback, err);
}

function createUrl(stream) {
  return URL.createObjectURL(stream);
}
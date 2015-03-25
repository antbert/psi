/**
 * Created by alehatsman on 3/14/15.
 */
Meteor.startup(function () {
	var peer = new Peer({
		host: 'pseudo-interview-signal.herokuapp.com', 
		port: 80,
		config: {'iceServers': [
		    { url: 'stun:stun.l.google.com:19302' },
		    { url: 'turn:homeo@turn.bistri.com:80', credential: 'homeo' }
		],
		secure: true
	}});

	peer.on('open', function(id) {
	  console.log('My peer ID is: ' + id);
	  var call = peer.call(id, navigator.getUserMedia());
	  call.on('stream', function(stream) {
	  // `stream` is the MediaStream of the remote peer.
	  // Here you'd add it to an HTML video/canvas element.
	  });
	});

	peer.on('call', function(call) {
	  // Answer the call, providing our mediaStream
	  call.answer(navigator.getUserMedia());
	});


});

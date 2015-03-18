/**
 * Created by alehatsman on 3/14/15.
 */
var PeerConnection = window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
var IceCandidate = window.mozRTCIceCandidate || window.RTCIceCandidate;
var SessionDescription = window.mozRTCSessionDescription || window.RTCSessionDescription;
navigator.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia;

navigator.getUserMedia(
  { audio: true, video: true },
  gotStream,
  function(error) { console.log(error) }
);

function gotStream(stream) {
  document.getElementById('callButton').style.display = 'inline-block';
  document.getElementById('localVideo').src = URL.createObjectURL(stream);

  pc = new PeerConnection({'iceServers': [{'url': 'stun:stun.l.google.com:19302'}]});
  pc.addStream(stream);
  pc.onicecandidate = gotIceCandidate;
  pc.onaddstream = gotRemoteStream;
}

function createOffer() {
  pc.createOffer(
    gotLocalDescription,
    function(error) { console.log(error) },
    { 'mandatory': { 'OfferToReceiveAudio': true, 'OfferToReceiveVideo': true } }
  );
}

function createAnswer() {
  pc.createAnswer(
    gotLocalDescription,
    function(error) { console.log(error) },
    { 'mandatory': { 'OfferToReceiveAudio': true, 'OfferToReceiveVideo': true } }
  );
}

function gotIceCandidate(event){
  if (event.candidate) {
    sendMessage({
      type: 'candidate',
      label: event.candidate.sdpMLineIndex,
      id: event.candidate.sdpMid,
      candidate: event.candidate.candidate
    });
  }
}

function gotRemoteStream(event){
  document.getElementById("remoteVideo").src = URL.createObjectURL(event.stream);
}
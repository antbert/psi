/* global IceServers: true */
/* global localPeer: false */

Template.rtc.events({
  'click .chat-btn': function() {
    var remoteId = template.find('.input-message').value;
    localPeer.call(remoteId);
  }
});
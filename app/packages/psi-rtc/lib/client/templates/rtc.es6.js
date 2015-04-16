/* global localPeer: false */

Template.rtc.events({
  'click .chat-btn': function(e, template) {
    var remoteId = template.find('.input-message').value;
    localPeer.call(remoteId);
  }
});
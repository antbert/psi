/**
 * Created by alehatsman on 4/9/15.
 */
Template.rtc.helpers({
  username: function() {
    return Meteor.user().profile.name;
  }
});
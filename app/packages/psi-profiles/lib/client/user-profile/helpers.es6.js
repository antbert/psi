/**
 * Created by Aleh_Atsman on 4/10/2015.
 */
Template.userProfile.helpers({
  username: function() {
    if(Meteor.user()) {
      return Meteor.user().profile.name;
    }
  },
  image: function() {
    if(Meteor.user()) {
      return Meteor.user().services.google.picture;
    }
  }
});
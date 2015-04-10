/**
 * Created by Aleh_Atsman on 4/10/2015.
 */
Template.userProfile.helpers({
  username: function() {
    return Meteor.user().profile.name;
  },
  image: function() {
    return Meteor.user().services.google.picture;
  }
});
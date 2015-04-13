/**
 * Created by Aleh_Atsman on 4/13/2015.
 */
Template.userList.helpers({
  userList: function() {
    return Meteor.users.find();
  },

  userProfileLink: function(id) {
    return '/userProfile/' + id;
  }
});
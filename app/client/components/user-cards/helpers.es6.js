/**
 * Created by Aleh_Atsman on 4/13/2015.
 */
Template.userCards.helpers({
  userList: function() {
    return Meteor.users.find();
  }
});
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
      var _id = Router.current().params._id;
      if(!_id) {
        _id = Meteor.userId();
      }
      return Meteor.users.findOne(_id).profile.picture;
    }
  }
});


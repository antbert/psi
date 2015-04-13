/**
 * Created by Aleh_Atsman on 4/13/2015.
 */
Template.registerHelper('username', function() {
  if(Meteor.user()) {
    return Meteor.user().profile.name;
  }
});
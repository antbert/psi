/**
 * Created by Aleh_Atsman on 4/7/2015.
 */
Meteor.startup(function() {
  Accounts.validateNewUser(function(user) {
    console.log(`=>User registration, user: ${user}`);
    return true;
  });
});
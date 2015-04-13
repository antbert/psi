/**
 * Created by Aleh_Atsman on 4/7/2015.
 */
Meteor.startup(function() {
  Accounts.validateNewUser(function(user) {
    console.log(`=>User registration, user: ${user}`);
    return true;
  });

  Accounts.onCreateUser(function(options, user) {
    console.log(user);
    if(options.profile && user.services.google) {
      user.profile = options.profile;
      user.profile.picture = user.services.google.picture;
      user.profile.email = user.services.google.email;
    }
    console.log(user);
    return user;
  });
});
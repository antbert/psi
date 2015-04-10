/**
 * Created by Aleh_Atsman on 4/10/2015.
 */
Meteor.publish('users', function () {
  if(this.userId) {
    return Meteor.users.find({
      _id: this.userId
    }, {
      fields: {'services.google.picture': 1}
    });
  } else {
    this.ready();
  }
});
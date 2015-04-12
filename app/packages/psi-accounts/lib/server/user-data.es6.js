/**
 * By default meteor publish only username, profile.
 * Use this to add some another fields.
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
/* global Companies: true */

Companies = new Mongo.Collection('Companies');

Meteor.publish('companies', function() {
  return Companies.find();
});
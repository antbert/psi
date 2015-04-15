/**
 * Created by Aleh_Atsman on 4/10/2015.
 */
/* global RouteHooks */

var {userProfile, companyProfile} = RouteHooks;

var config = function(conf) {
  return _.extend(userProfile, conf);
}

Router.route('/user', function() {
  this.layout('hn-template');
  this.render('userProfile');
}, config({
  name: 'current.user.profile'
}));

Router.route('/user/:_id', function() {
  this.layout('hn-template');
  this.render('userProfile');
}, config({
  name: 'show.user.profile'
}));

Router.route('/company', function() {
  this.layout('hn-template');
  this.render('companyProfile');
}, {
  name: 'show.company.profile',
  onBeforeAction: companyProfile.beforeAction,
  onStop: companyProfile.onStop
});

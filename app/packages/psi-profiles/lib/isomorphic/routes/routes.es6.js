/**
 * Created by Aleh_Atsman on 4/10/2015.
 */
/* global RouteHooks */

var {userProfile, companyProfile} = RouteHooks;

Router.route('/user', function() {
  this.layout('hn-template');
  this.render('userProfile');
}, {
  name: 'current.user.profile',
  onBeforeAction: userProfile.beforeAction,
  onStop: userProfile.onStop
});

Router.route('/user/:_id', function() {
  this.layout('hn-template');
  this.render('userProfile');
}, {
  name: 'show.user.profile',
  onBeforeAction: userProfile.beforeAction,
  onStop: userProfile.onStop
});

Router.route('/company', function() {
  this.layout('hn-template');
  this.render('companyProfile');
}, {
  name: 'show.company.profile',
  onBeforeAction: companyProfile.beforeAction,
  onStop: companyProfile.onStop
});

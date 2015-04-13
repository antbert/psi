/**
 * Created by Aleh_Atsman on 4/10/2015.
 */
/* global RouteHooks */

var {userProfile, companyProfile} = RouteHooks;

Router.route('/user', function() {
  this.render('userProfile');
}, {
  name: 'current.user.profile',
  onBeforeAction: userProfile.beforeAction,
  onStop: userProfile.onStop
});

Router.route('/user/:_id', function() {
  this.render('userProfile');
}, {
  name: 'show.user.profile',
  onBeforeAction: userProfile.beforeAction,
  onStop: userProfile.onStop
});

Router.route('/companyProfile', {
  template: 'companyProfile',
  onBeforeAction: companyProfile.beforeAction,
  onStop: companyProfile.onStop
});

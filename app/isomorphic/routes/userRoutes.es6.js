/**
 * Created by Aleh_Atsman on 4/10/2015.
 */
/* global RouteHooks */

var {userProfile, companyProfile} = RouteHooks;

var config = function(conf) {
  return _.extend(userProfile, conf);
};

function userHandler() {
  this.layout('hn-template');
  this.render('userProfile');
}

Router.route('/user', userHandler, config({
  name: 'current.user.profile'
}));

Router.route('/user/:_id', userHandler, config({
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

/**
 * Created by alehatsman on 4/20/15.
 */
/* global RouteHooks */

var {companyProfile} = RouteHooks;

Router.route('/company', function() {
  this.layout('main');
  this.render('companyProfile');
}, {
  name: 'show.company.profile',
  onBeforeAction: companyProfile.beforeAction,
  onStop: companyProfile.onStop
});

Router.route('/company/new', function() {
  this.layout('main');
  this.render('registerCompany');
}, {
  name: 'registerCompany'
});
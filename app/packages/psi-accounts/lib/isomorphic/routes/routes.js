/* global RouteHooks: false */

Meteor.startup(function() {
  Router.route('/', {
    name: 'landingRoute',
    template: 'landing'
  });

  Router.route('/login', {
    name: 'loginRoute',
    template: 'loginForm',
    onBeforeAction: RouteHooks.login.onBeforeAction
  });

  Router.route('/register', {
    name: 'registerRoute',
    template: 'userRegister'
  });
});

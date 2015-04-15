/* global RouteHooks: false */

Meteor.startup(function() {
  Router.route('/', {
    name: 'landingRoute',
    template: 'landing'
  });

  Router.route('/login', {
    name: 'loginRoute',
    template: 'loginForm',
    onBeforeAction: function() {
    if (Meteor.user()) {
      Router.go('/rtc');
    }
    this.next();
  }
  });

  Router.route('/register', {
    name: 'registerRoute',
    template: 'userRegister'
  });
});


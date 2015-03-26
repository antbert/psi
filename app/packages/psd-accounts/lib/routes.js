Meteor.startup(function () {

  Router.route('/', {
    name: 'landingRoute',
    template: 'landing'
  });

  Router.route('/login', {
    name: 'loginRoute',
    template: 'loginForm'
  });

});
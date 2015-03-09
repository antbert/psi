Meteor.startup(function () {

  Router.route('/', {
    name: 'customRoute',
    template: 'landing'
  });

});
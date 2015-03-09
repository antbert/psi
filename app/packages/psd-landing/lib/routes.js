Meteor.startup(function () {
  
  console.log('Routes start!');

  Router.route('/landing', {
    name: 'customRoute',
    template: 'landing'
  });

});
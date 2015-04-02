Template.loginForm.events({
  'click .login-button': function loginHandler(event, template) {
    var login = template.find('.login-field').value;
    var password = template.find('.password-field').value;
    Meteor.loginWithPassword({username: login}, password, function (error) {
      if (error) {
        console.log(error);
      } else {
        Router.go('/rtc');
      }
    });
  },

  'click .google-ico': function loginWithGoogle(/*event, template*/) {
    Meteor.loginWithGoogle(function (error) {
      console.log(error);
    });
  }
});
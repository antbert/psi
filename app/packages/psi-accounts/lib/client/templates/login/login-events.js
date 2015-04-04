Template.loginForm.events({
  'click .login-button': function loginHandler(event, template) {
    var login = template.find('.login-field').value;
    var password = template.find('.password-field').value;

    //Show error message on PASSWORD input, when clicking on login-button
    event.preventDefault();
    $('form').find('input[type="password"]').toggleClass('has-error').next('span').toggleClass('is-visible');

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

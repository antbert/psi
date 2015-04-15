/* global Validator: false */

Template.userRegister.events({
  'blur .email-field': function (event) {
    Validator.validateEmail(event.currentTarget);
  },

  'blur .login-field': function (event) {
    Validator.validateUsername(event.currentTarget);
  },

  'blur .password-field': function (event, template) {
    var username = template.$('.login-field').val();
    var email = template.$('.email-field').val();
    Validator.validatePassword(event.currentTarget, username, email);
  },

  'submit form': function (event) {
    event.preventDefault(); //stop form submit
    if (Validator.isFormValid(event.currentTarget)) {
      console.log('FORM VALID');
      var {username, email, password} = event.currentTarget;
      Accounts.createUser({
        username: username.value,
        email: email.value,
        password: password.value
      }, function (err) {
        console.log(err);
      });
    }
  }
});
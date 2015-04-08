//var {cssClasses} = Globals;

Template.loginForm.events({
  'submit form': function loginHandler(event) {
    event.preventDefault(); //stop form submit
    const {username, password} = event.target;

    Meteor.loginWithPassword({email: username.value}, password.value, (error) => {
      if(error) {
        alert(`Error, code: ${error.error}". Reason: ${error.reason}`);
      } else {
        Router.go('/rtc');
      }
    });
  },

  'click .google-ico': function loginWithGoogle(/*event, template*/) {
    Meteor.loginWithGoogle((error) => {
      console.log(error);
    });
  }
});
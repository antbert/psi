//var {cssClasses} = Globals;

Template.loginForm.events({
  'submit form': function loginHandler(event) {
    event.preventDefault(); //stop form submit
    const {username, password} = event.target;
    Meteor.loginWithPassword({email: username.value}, password.value, loginHandler);
  },

  'click .google-ico': function loginWithGoogle() {
    Meteor.loginWithGoogle(loginHandler);
  }
});

function loginHandler(error) {
  if(error) {
    alert(`Error, code: ${error.error}". Reason: ${error.reason}`);
  } else {
    Router.go('/profile');
  }
}
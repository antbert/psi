
Template.userRegister.events({
  'blur .email-field': function(event, template) {
    var emailField = new EmailField(template.$(event.currentTarget));
    if(emailField.isNotValid()) {
      emailField.showError();
    } else {
      emailField.hideError();
    }
  }
});

class EmailField {
  constructor(el) {
    this.el = el;
    this.fieldSelector = 'input[type="email"]';
    this.errorTagName = 'span';
    this.errorClass = 'has-error';
    this.visibilityClass = 'is-visible';
  }

  showError() {
    this.el
      .toggleClass(this.errorClass)
      .next(this.errorTagName)
      .toggleClass(this.visibilityClass);
  }

  hideError() {
    this.el
      .removeClass(this.errorClass)
      .next(this.errorTagName)
      .removeClass(this.visibilityClass);
  }

  isNotValid() {
    return isNotValidEmail(this.el.value);
  }
}

function isNotValidEmail(email) {
  var EMAIL_REGEX = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return !EMAIL_REGEX.test(email);
}

Template.userRegister.events({
  'blur .email-field': function(event, template) {
    var emailEl = template.$('input[type="email"]');
    var eventValue = event.currentTarget.value;

    var emailField = new EmailField(emailEl, eventValue);
    if(emailField.isNotValid()) {
      emailField.showError();
    } else {
      emailField.hideError();
    }
  }
});

class EmailField {
  constructor(el, value) {
    this.el = el;
    this.value = value;
    this.fieldSelector = 'input[type="email"]';
    this.errorTagName = 'span';
    this.errorClass = 'has-error';
    this.visibilityClass = 'is-visible';
  }

  showError() {
    if(this.isErrorState()) {
      return;
    }
    this.el
      .toggleClass(this.errorClass)
      .next(this.errorTagName)
      .toggleClass(this.visibilityClass);
  }

  hideError() {
    if(this.isNotErrorState()) {
      return;
    }
    this.el
      .removeClass(this.errorClass)
      .next(this.errorTagName)
      .removeClass(this.visibilityClass);
  }

  isErrorState() {
    return this.el.hasClass(this.errorClass);
  }

  isNotErrorState() {
    return !this.isErrorState();
  }

  isNotValid() {
    return isNotValidEmail(this.value);
  }
}

function isNotValidEmail(email) {
  var EMAIL_REGEX = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return !EMAIL_REGEX.test(email);
}
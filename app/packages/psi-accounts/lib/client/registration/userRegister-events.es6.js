Template.userRegister.events({
  'blur .email-field': function (event) {
    debugger;
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

class Validator {
  static isFormValid({username, email, password}) {
    return Validator.validateUsername(username) &&
      Validator.validateEmail(email) &&
      Validator.validatePassword(password, username);
  }

  static validateUsername(username) {
    return Validator.validate(username, Validator.isUsernameValid);
  }

  static validateEmail(email) {
    return Validator.validate(email, Validator.isEmailValid);
  }

  static validatePassword(password, username, email) {
    return Validator.validate(password, _.partial(Validator.isPasswordNotValid, username, email));
  }

  static validate(domEl, isValid) {
    var $el = $(domEl);
    var value = domEl.value;

    var field = new Field($el);
    var validationResult = isValid(value);
    if (validationResult === true) {
      field.hideError();
      return true;
    } else {
      field.showError(validationResult.error);
      return false;
    }
  }

  static isEmailValid(value) {
    var EMAIL_REGEX = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (EMAIL_REGEX.test(value)) {
      return true;
    } else {
      return {error: 'Email is not valid'};
    }
  }

  static isUsernameValid(value) {
    var regex = /^\w+$/;
    if (value === '') {
      return true;
    } else if (!regex.test(value)) {
      return {error: 'Error username should contains only numbers and letters'};
    } else if (value.length < 3 || value.length > 12) {
      return {error: 'Error: username should be >= 3 and <= 12'};
    } else {
      return true;
    }
  }

  /**
   * Username is first parameter, because we need to partial this function
   * to use it with a contract of Validator.validate method.
   * @param username
   * @param email
   * @param password
   * @returns {Object|boolean}
   */
  static isPasswordNotValid(username, email, password) {
    var constraintsList = [
      {
        isNotValid: () => {
          return password.length < 6;
        },
        error: 'Error: Password must contain at least six characters!'
      },
      {
        isNotValid: () => {
          return password === username;
        },
        error: 'Error: Password must be different from Username!'
      },
      {
        isNotValid: () => {
          return password === email;
        },
        error: 'Error: Password must be different from Email!'
      },
      {
        isNotValid: () => {
          return !/[0-9]/.test(password);
        },
        error: 'Error: password must contain at least one number (0-9)!'
      },
      {
        isNotValid: () => {
          return !/[a-z]/.test(password);
        },
        error: 'Error: password must contain at least one lowercase letter (a-z)!'
      },
      {
        isNotValid: () => {
          return !/[A-Z]/.test(password);
        },
        error: 'Error: password must contain at least one uppercase letter (A-Z)!'
      }
    ];

    return _.find(constraintsList, (constraint) => {
        return constraint.isNotValid();
      }) || true;
  }
}

class Field {
  constructor(el) {
    this.el = el;
    this.errorTagName = 'span';
    this.errorClass = 'has-error';
    this.visibilityClass = 'is-visible';
  }

  showError(msg) {
    var error = this.el.next(this.errorTagName);
    error.text(msg);
    if (this.isNotErrorState()) {
      this.el.toggleClass(this.errorClass);
      error.toggleClass(this.visibilityClass);
    }
  }

  hideError() {
    if (this.isErrorState()) {
      this.el
        .removeClass(this.errorClass)
        .next(this.errorTagName)
        .removeClass(this.visibilityClass);
    }
  }

  isErrorState() {
    return this.el.hasClass(this.errorClass);
  }

  isNotErrorState() {
    return !this.isErrorState();
  }
}
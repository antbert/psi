/**
 * Created by Aleh_Atsman on 4/13/2015.
 */
/* global Field: true */

class InputField {
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

Field = InputField;
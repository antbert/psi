/**
 * Created by Aleh_Atsman on 4/10/2015.
 */
/* global RouteHooks: true */
var {selectors} = Globals;
const BODY_CLASS = 'user-page';
RouteHooks = {
  beforeAction: function beforeAction() {
    if(!Meteor.user()) {
      this.go('/login');
      this.next();
      return;
    }
    $(selectors.BODY).addClass(BODY_CLASS);
    this.next();
  },
  onStop: function onStop() {
    $(selectors.BODY).removeClass(BODY_CLASS);
    this.next();
  }
};
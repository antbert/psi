/**
 * Created by Aleh_Atsman on 4/10/2015.
 */
/* global RouteHooks: true */
var {selectors} = Globals;
const BODY_CLASS = 'user-page';
RouteHooks = {
  beforeAction: function beforeAction() {
    $(selectors.body).addClass(BODY_CLASS);
    this.next();
  },
  onStop: function onStop() {
    $(selectors.body).removeClass(BODY_CLASS);
    this.next();
  }
};
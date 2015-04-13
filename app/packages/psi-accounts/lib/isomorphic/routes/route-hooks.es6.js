/**
 * Created by Aleh_Atsman on 4/13/2015.
 */
/* global RouteHooks: true */

RouteHooks = {
  login: {
    onBeforeAction: function() {
      if (Meteor.user()) {
        Router.go('/rtc');
      }
      this.next();
    }
  }
};
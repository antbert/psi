/**
 * Created by Aleh_Atsman on 4/10/2015.
 */
/* global RouteHooks */
Router.route('/profile', {
  name: 'profileRoute',
  template: 'userProfile',
  onBeforeAction: RouteHooks.beforeAction,
  onStop: RouteHooks.onStop
});

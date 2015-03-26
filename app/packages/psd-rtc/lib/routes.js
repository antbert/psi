/**
 * Created by alehatsman on 3/14/15.
 */
Meteor.startup(function () {

  Router.route('/rtc', {
    name: 'rtcRoute',
    template: 'rtc',
    onBeforeAction: beforeAction,
    onStop: onStop
  });

});

function beforeAction() {
  $('body').addClass('videocall-body');
  this.next();
}

function onStop() {
  $('body').removeClass('videocall-body');
}
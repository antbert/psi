/**
 * Created by alehatsman on 3/14/15.
 */
Meteor.startup(function () {

  Router.route('/rtc', {
    name: 'rtcRoute',
    template: 'rtc'
  });

});
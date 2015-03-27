/**
 * Created by alehatsman on 3/26/15.
 */
RtcActionHooks = (function() {
  var VIDEOCALL_BODY = 'videocall-body';
  var BODY = 'body';
  return {
    beforeAction: function beforeAction() {
      $(BODY).addClass(VIDEOCALL_BODY);
      this.next();
    },
    onStop: function onStop() {
      $(BODY).removeClass(VIDEOCALL_BODY);
    }
  };
})();

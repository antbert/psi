/**
 * Created by alehatsman on 3/26/15.
 */

const BODY_CLASS = 'videocall-body';

RtcActionHooks = {
  beforeAction: function() {
    $('body').addClass(BODY_CLASS);
    this.next();
  },
  onStop: function() {
    $('body').removeClass(BODY_CLASS);
  }
};


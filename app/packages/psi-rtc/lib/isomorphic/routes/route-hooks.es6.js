/**
 * Created by alehatsman on 3/26/15.
 */

const {selectors} = Globals;
const BODY_CLASS = 'videocall-body';

RtcActionHooks = {
  beforeAction: function() {
    $(selectors.BODY).addClass(BODY_CLASS);
    this.next();
  },
  onStop: function() {
    $(selectors.BODY).removeClass(BODY_CLASS);
  }
};


/**
 * Created by Aleh_Atsman on 4/10/2015.
 */
/* global RouteHooks: true */
var {selectors} = Globals;
const USER_PROFILE_BODY_CLASS = 'user-page';
const COMPANY_PROFILE_BODY_CLASS = 'company-page';

function createClassChanger(className) {
  return {
    beforeAction: function() {
      $(selectors.BODY).addClass(className);
      this.next();
    },
    onStop: function() {
      $(selectors.BODY).removeClass(className);
    }
  };
}

RouteHooks = {
  userProfile : createClassChanger(USER_PROFILE_BODY_CLASS),
  companyProfile: createClassChanger(COMPANY_PROFILE_BODY_CLASS)
};
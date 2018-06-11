import * as reduxActions from "../modules/core/actions/redux-actions";
import debug from "debug";

const log = debug("nqm-app:boot");

const initialiseUser = function(context, user) {
  // Reset initialisation status.
  context.store.dispatch(reduxActions.reset());

  // Don't initialise user until we have a real user account, e.g. ignore the application account, which may be used
  // to initialise the ddp connection until a real user signs in.
  if (user.accountType === context.utils.constants.userAccountType) {
    log("initialising user %s", user.username);
    // Do any user initialisation here.
    // For example, make sure a profile dataset exists for the current user.
    context.store.dispatch(reduxActions.setUserInitialised(true));
    return null;
  } else {
    context.store.dispatch(reduxActions.setAppInitialised(true));
  }
};

export {
  initialiseUser,
};

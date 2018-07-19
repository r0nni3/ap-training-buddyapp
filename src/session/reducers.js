function loggedIn(state = false, action) {
  switch(action.type) {
    case 'LOGIN_SUCCED':
      return true;
    case 'LOGIN_FAILED':
      return false;
    case 'LOGOUT':
      return null;
    default:
      return state;
  }
}

function sessionStart(state = false, action) {
  switch(action.type) {
    case 'SESSION_START_INIT':
      return true;
    case 'SESSION_START_CANCEL':
      return false;
    default:
      return state;
  }
}

const reducers = {
  loggedIn,
  sessionStart
};

export default reducers;
import {LOGIN_SUCCESS, LOGOUT} from '../ActionNames';

/*state: {
    token
}
*/

/*
action : {
    type:
    payload:
}
*/

const initState = {
  token: null,
};

const auth = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
      };
    case LOGOUT:
      return initState;
    default:
      return state;
  }
};

export default auth;

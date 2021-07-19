import {LOGIN, LOGIN_SUCCESS, LOGOUT} from '../ActionNames';

export const loginSuccess = token => ({
  type: LOGIN_SUCCESS,
  payload: token,
});

export const login = (email, password) => ({
  type: LOGIN,
  payload: {email, password},
});

export const logout = () => ({
  type: LOGOUT,
});

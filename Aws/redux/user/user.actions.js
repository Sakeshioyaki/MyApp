import {
  EMIT_FINISH_FIRST_LAUNCH_APP,
  REGISTER,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
} from '../ActionNames';

export const registerSubmit = (email, password, nickname) => ({
  type: REGISTER,
  payload: {email, password, nickname},
});

export const registerSuccess = registerRes => ({
  type: REGISTER_SUCCESS,
  payload: registerRes,
});

export const registerFailure = error => ({
  type: REGISTER_FAILURE,
  payload: error,
});

export const emitFinishFirstLaunchApp = () => ({
  type: EMIT_FINISH_FIRST_LAUNCH_APP,
});

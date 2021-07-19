import {call, put, takeLatest} from 'redux-saga/effects';
import {apiSignin} from '../../services/api';
import {LOGIN} from '../ActionNames';
import {loginSuccess} from './auth.actions';

/**
 * worker saga: After successful login, dispatch actions
 * to fetch user details and user cart data
 *
 * @param {Object} action               - action object dispatched
 * @param {number} action.payload.token - unique token for current logged in user
 */
function* onLoginSuccess(action) {
  try {
    console.log('Login Success');
  } catch (error) {
    console.log(error);
  }
}

function* onLogin(action) {
  try {
    const {email, password} = action.payload;
    // TODO: login action here
    const res = yield call(apiSignin, {email, password});
    if (res && res.accountName) {
      yield put(loginSuccess(res.accountName));
    } else if (res && res.message) {
      alert(res.message);
    }
  } catch (error) {
    console.error('error', error);
  }
}

export default function* authSagas() {
  // @ts-ignore-block
  yield takeLatest(LOGIN, onLogin);
}

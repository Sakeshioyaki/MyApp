import {call, put, takeLatest} from 'redux-saga/effects';
// import NavigationService from '~/services/navigation/NavigationService';
import {apiRegister} from '../../services/api';
import {
  LOGIN_SUCCESS,
  REGISTER,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
} from '../ActionNames';

function* onRegister(action) {
  console.log('Saga register');
  try {
    const {email, password, nameAccount} = action.payload;
    const response = yield call(apiRegister, {email, password, nameAccount});
    if (response.message === 'OK') {
        console.log('login OK in Saga');
    }

    /// Router to main screen
    // NavigationService.reset('Root');
    yield put({type: REGISTER_SUCCESS, payload: response.nameAccount});
    yield put({type: LOGIN_SUCCESS, payload: response.nameAccount});
  } catch (error) {
    yield put({type: REGISTER_FAILURE, payload: {}});
  }
}

export default function* userSaga() {
  // @ts-ignore-block
  yield takeLatest(REGISTER, onRegister);
}

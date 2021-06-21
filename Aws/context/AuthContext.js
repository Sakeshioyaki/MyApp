import React from 'react';
import createDataContext from './CreateDataContext';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

// // Set an initializing state whilst Firebase connects
// const [initializing, setInitializing] = useState(true);
// const [user, setUser] = useState();

// // Handle user state changes
// function onAuthStateChanged(user) {
//   setUser(user);
//   if (initializing) {
//     setInitializing(false);
//   }
// }

// useEffect(() => {
//   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//   return subscriber; // unsubscribe on unmount
// }, []);

GoogleSignin.configure({
  webClientId: '214403862704-rmgqbt2glkl8fas6tb17ksgd3n749',
});

const authReducer = (state, action) => {
  switch (action.type) {
    case 'signout':
      return {token: null, email: ''};
    case 'signin':
      return signin();
    case 'signinGoogle':
      return signinGoogle();
    case 'signinFacebook':
      return signinFacebook();
    case 'signup':
      return {
        token: action.payload.token,
        email: action.payload.email,
      };
    default:
      return state;
  }
};

const signup = dispatch => {
  return ({email, password}) => {
    console.log('Signup');
  };
};

const signin = dispatch => {
  return ({email, password}) => {
    // Do some API Request here
    console.log('Signin');
    dispatch({
      type: 'signin',
      payload: {
        token: 'some access token here',
        email,
      },
    });
  };
};

async function signinGoogle() {
  // Get the users ID token
  const {idToken} = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  console.log('dang nhap = google  /  token : ' + idToken);
  return auth().signInWithCredential(googleCredential);
}

async function signinFacebook() {
  console.log('dang nhap = facebook');
}

const signout = dispatch => {
  return () => {
    dispatch({type: 'signout'});
  };
};

export const {Provider, Context} = createDataContext(
  authReducer,
  {signin, signout, signup, signinGoogle, signinFacebook},
  {token: null, email: ''},
);

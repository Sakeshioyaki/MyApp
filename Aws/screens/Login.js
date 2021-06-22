/* eslint-disable react-native/no-inline-styles */
import React, {useState, useContext, useEffect} from 'react';
import {
  ImageBackground,
  Dimensions,
  View,
  Image,
  ScrollView,
  StyleSheet,
  TextInput,
} from 'react-native';
import Inputs from '../components/Input';
import Submit from '../components/Submit';
import {Block, Button, Text} from 'galio-framework';
import Account from '../components/Account';
import Images from '../constants/Images';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
// import State from '../context/State';
// import {Context as AuthContext} from '../context/AuthContext';

const {height, width} = Dimensions.get('screen');

const pressLogin = (email, password) => {
  return fetch('http://192.168.71.105:8001/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then(response => response.json())
    .then(json => {
      if (json.login === 'OK') {
        console.log('OK....');
      } else {
        console.log('NOT OK ....');
      }
    })
    .catch(error => {
      console.error(error);
    });
};

const Login = props => {
  // const {state, signinGoogle, signinFacebook} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);


  async function signinGoogle(){

 // Get the users ID token
 const { idToken } = await GoogleSignin.signIn();

 // Create a Google credential with the token
 const googleCredential = auth.GoogleAuthProvider.credential(idToken);

 // Sign-in the user with the credential
 return auth().signInWithCredential(googleCredential);

  }



  return (
        <ScrollView style={{}}>
          <ImageBackground
            source={Images.Login}
            style={{height, width, zIndex: 1}}>
            <View style={styles.container}>
              <Image
                source={Images.LoginImage}
                resizeMode="center"
                style={styles.image}
              />
              <Text style={styles.textTitle}> Wellcome back </Text>
              <Text style={styles.textBody}>Login to your acccount</Text>
              <View style={{marginTop: 15}}>
                {/* <Inputs name="Email" icon="user" value="" handleText={setEmail} /> */}
                <Inputs
                  name="Email"
                  icon="user"
                  value=""
                  iconColor="white"
                  handleText={setEmail}
                  defaultValue="Email"
                />
              </View>
              <View style={{marginTop: 5}}>
                <Inputs
                  name="Password"
                  icon="lock"
                  iconColor="white"
                  pass={true}
                  handleText={setPassword}
                  defaultValue="Password"
                />
              </View>
              <View style={{width: '90%'}}>
                <Text style={[styles.textBody, {alignSelf: 'flex-end'}]}>
                  Forgot your password ?
                </Text>
              </View>
              <View style={{marginTop: 10}}>
                <Button
                  title="LOGIN"
                  textStyle="white"
                  color="success"
                  opacity="20"
                  email={email}
                  password={password}
                  onPress={() => pressLogin(email, password)}>
                  <Text bold h5 color="white">
                    Login
                  </Text>
                </Button>
              </View>
              <Text style={styles.textBody}>Or connect using</Text>
              <View style={{flexDirection: 'row'}}>
                <Button
                  color="#3b5c8f"
                  icon="facebook-square"
                  title="Facebook"
                  onPress={() => signinFacebook()}>
                  <Text>Facebook</Text>
                </Button>
                <Button
                  color="#ec482f"
                  icon="google"
                  title="Google"
                  onPress={() => signinGoogle().then(() => console.log('Signed in with Google!'))}>
                  <Text>Google</Text>
                </Button>
              </View>
              <Text style={[styles.textBody, {alignSelf: 'center'}]}>
                or Don't have an account yet
              </Text>
              <Button
                style={[
                  styles.textBody,
                  {color: '#00ffff'},
                  {fontWeight: 'bold'},
                ]}
                onPress={() => props.navigation.navigate('SignUp')}>
                  <Text>
                SignUp
              </Text>
              </Button>
            </View>
          </ImageBackground>
        </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 600,
    height: 250,
    marginVertical: -1,
  },
  textTitle: {
    fontFamily: 'Foundation',
    fontSize: 28,
    marginVertical: 4,
    color: 'white',
  },
  textBody: {
    fontFamily: 'Foundation',
    fontSize: 15,
    color: 'white',
    marginTop: 10,
  },
});

export default Login;

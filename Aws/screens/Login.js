/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  Dimensions,
  View,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Inputs from '../components/Input';
import {Text, Button} from 'galio-framework';
import Images from '../constants/Images';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import State from '../context/State';

const {height, width} = Dimensions.get('screen');
GoogleSignin.configure({
  webClientId: '214403862704-rmgqbt2glkl8fas6tb17ksgd3n749ghm',
});

async function FacebookLogin() {}
async function GoogleLogin() {
  // Get the users ID token
  const {idToken} = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  localStorage.setItem('idUser', JSON.stringify(idToken));

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}

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

  // if (initializing) return null;

  // if (!user) {
  //   return (
  //     <View>
  //       <Text>Login</Text>
  //     </View>
  //   );
  // }

  // return (
  //   <View>
  //     <Text>Welcome {user.email}</Text>
  //   </View>
  // );
  return (
    <ScrollView style={{}}>
      <ImageBackground source={Images.Login} style={{height, width, zIndex: 1}}>
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
          {console.log('data is : ' + State.data)}
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
              onlyIcon
              icon="facebook-square"
              iconFamily="antdesign"
              iconSize={30}
              color="#ffffff"
              iconColor="#4267b2"
              style={{width: 40, height: 40}}
            />
            {/* <Button
              style={styles.button}
              color={argonTheme.COLORS.SECONDARY}
              icon="tags"
              iconFamily="antdesign"
              iconSize={30}
              iconColor="#fff"
              onPress={() => {
                console.log('whyyyy');
                GoogleLogin();
              }}>
              <Text bold h5>
                Google
              </Text>
            </Button> */}
            <Button
              onlyIcon
              icon="google"
              iconFamily="antdesign"
              iconSize={30}
              color="#ffffff"
              iconColor="#EA4335"
              style={{width: 40, height: 40}}
              onPress={() => {
                GoogleLogin();
                if (!user) {
                  props.navigation.navigate('AppStack');
                }
              }}
            />
          </View>
          <Text style={[styles.textBody, {alignSelf: 'center'}]}>
            or Don't have an account yet
          </Text>
          <Text
            style={[styles.textBody, {color: '#00ffff'}, {fontWeight: 'bold'}]}
            onPress={() => props.navigation.navigate('SignUp')}>
            SignUp
          </Text>
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

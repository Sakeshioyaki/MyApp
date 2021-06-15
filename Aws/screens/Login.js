/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  ImageBackground,
  Dimensions,
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Inputs from '../components/Input';
import Submit from '../components/Submit';
import Account from '../components/Account';
import Images from '../constants/Images';

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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
            <Inputs name="Email" icon="user" value="" handleText={setEmail} />
          </View>
          <View style={{marginTop: 5}}>
            <Inputs
              name="Password"
              icon="lock"
              pass={true}
              handleText={setPassword}
            />
          </View>
          <View style={{width: '90%'}}>
            <Text style={[styles.textBody, {alignSelf: 'flex-end'}]} />
            Forgot your password ?{' '}
          </View>
          <View style={{marginTop: 10}}>
            <Submit
              title="LOGIN"
              color="#5b21cf"
              email={email}
              password={password}
              press={pressLogin}
            />
          </View>
          <Text style={styles.textBody}>Or connect using</Text>
          <View style={{flexDirection: 'row'}}>
            <Account color="#3b5c8f" icon="facebook-square" title="Facebook" />
            <Account color="#ec482f" icon="google" title="Google" />
          </View>
          <Text style={[styles.textBody, {alignSelf: 'center'}]}>
            {' '}
            or Already have an account
          </Text>
          <Text
            style={[styles.textBody, {color: 'blue'}, {fontWeight: 'bold'}]}
            onPress={() => props.navigation.navigate('SignUp')}>
            {' '}
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
    fontSize: 13,
    color: 'gray',
  },
});

export default Login;

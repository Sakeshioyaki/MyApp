import React from 'react';
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {Text} from 'galio-framework';
import {color} from 'react-native-reanimated';
import Inputs from '../components/Input';
import Input from '../components/Input';
import Submit from '../components/Submit';
import PropTypes from 'prop-types';
import {Images} from '../constants';

const {height, width} = Dimensions.get('screen');

const SignUp = props => {
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <ImageBackground source={Images.Login} style={{height, width, zIndex: 1}}>
        <View style={styles.container}>
          <Image
            source={require('../assets/imgs/signup.png')}
            resizeMode="center"
            style={styles.image}
          />
          <Text style={styles.textTitle}> Let's get started</Text>
          <Text style={styles.textBody}>Create an account</Text>
          <Inputs name="Account Name" icon="user-circle" iconColor="white" />
          <Inputs name="Full Name" icon="user" iconColor="white" />
          <Inputs name="Email" icon="envelope" iconColor="white" />
          <Inputs name="Phone" icon="phone" iconColor="white" />
          <Inputs name="Password" icon="lock" pass={true} iconColor="white" />
          <Inputs
            name="Cofirm Password"
            icon="lock"
            pass={true}
            iconColor="white"
          />
          <View style={{marginTop: 5}} />
          <Submit color="#0251ce" title="CREAT" />
          <View style={{flexDirection: 'row'}}>
            <Text style={[styles.textBody, {color: 'gray'}]}>
              Already have an account
            </Text>
            <Text
              h5
              style={[
                styles.textBody,
                {color: '#00ff00'},
                {fontWeight: 'bold'},
              ]}
              onPress={() => {
                props.navigation.navigate('Home');
              }}>
              Login Here
            </Text>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 200,
    marginVertical: 0,
  },
  textTitle: {
    fontSize: 25,
    fontFamily: 'Foundation',
    marginVertical: 2,
    color: 'white',
  },
  textBody: {
    fontSize: 16,
    fontFamily: 'Foundation',
    marginVertical: 3,
    color: '#00ff00',
  },
});

export default SignUp;

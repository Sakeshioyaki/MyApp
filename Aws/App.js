/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import 'react-native-gesture-handler';
import Screens from './navigation/Screens';
import Onboarding from './screens/Onboarding';
import { NavigationContainer } from '@react-navigation/native';

const App: () => Node = () => {
  return(
    <NavigationContainer>
      <Screens/>
    </NavigationContainer>
    
  );
};

const styles = StyleSheet.create({

});

export default App;

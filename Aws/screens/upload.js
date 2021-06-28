import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  Dimensions,
  View,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Theme from '../constants/Theme';
import {Text, Button, Block, Input} from 'galio-framework';
import auth from '@react-native-firebase/auth';


const Upload = (()=>{
    return (
        <Block>
            <Input placeholder="theme" color={Theme.COLORS.THEME} style={{ borderColor: Theme.COLORS.THEME }} placeholderTextColor={Theme.COLORS.THEME} />
        </Block>
    );
})
export default Upload;
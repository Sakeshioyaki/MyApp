
import React, { useState, useEffect, Component} from 'react';
import {ImageBackground, View, Text, Image, ScrollView, StyleSheet, Dimensions} from 'react-native';
import Inputs from '../components/Input';
import Submit from '../components/Submit';
import Account from '../components/Account';
import SignUp from './SignUp';
import Card from '../components/Card';
import { color } from 'react-native-reanimated';
import { Block, theme} from 'galio-framework';
import {articles} from '../constants';
import {Articles} from '../screens';
import Images from '../constants/Images';
import {
    createDrawerNavigator,
    DrawerContentScrollView
  } from '@react-navigation/drawer';

  const { height, width } = Dimensions.get("screen");


  export default function ProfileContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <Block flex >
            <ImageBackground
                source={Images.DrawImage}
                style={{ height, width, zIndex: 1 }}>
            <Block>

            </Block>
            <Block>

            </Block>
            <Block>

            </Block>
            <Block>

            </Block>
            <Block>

            </Block>
        </ImageBackground>
        </Block>
      </DrawerContentScrollView>
    );
  }
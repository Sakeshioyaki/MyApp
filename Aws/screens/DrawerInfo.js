import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Home from './Home';
import MyArticles from './MyArticles';
import NewPost from './NewPost';
import InforContent from './InforContent';

const Drawer = createDrawerNavigator();
  
export default function DrawerInfo() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#c6cbef',
            width: 240,
          },
        }}
        drawerContent={(props) => <InforContent {...props} />}>
        <Drawer.Screen name="Home" component={Home} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
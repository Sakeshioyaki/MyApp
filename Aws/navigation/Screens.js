import React from 'react';
import {Dimensions} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Header from '../components/Header';
import ProfileContent from '../screens/ProfileContent';

import Home from '../screens/Home';
import Onboarding from '../screens/Onboarding';
import Detail from '../screens/Detail';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const {width} = Dimensions.get('screen');

function TabHome(props) {
  return (
    <Tab.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: () => (
            <Header
              search
              title="Home"
              // navigation={this.props.navigation}
            />
          ),
        }}
      />
      <Stack.Screen name="Detail" component={Detail} />
    </Tab.Navigator>
  );
}

function AppStack(props) {
  return (
    <Drawer.Navigator
      style={{flex: 1}}
      drawerContent={props => <ProfileContent {...props} />}
      drawerStyle={{
        backgroundColor: 'white',
        width: width * 0.8,
      }}
      // screenOptions={{
      //     headerShown : false
      // }}
      drawerContentOptions={{
        activeTintcolor: 'white',
        inactiveTintColor: '#000',
        activeBackgroundColor: 'transparent',
        itemStyle: {
          width: width * 0.75,
          backgroundColor: 'transparent',
          paddingVertical: 16,
          paddingHorizonal: 12,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
        },
        labelStyle: {
          fontSize: 18,
          marginLeft: 12,
          fontWeight: 'normal',
        },
      }}>
      <Drawer.Screen name="TabHome" component={TabHome} />
    </Drawer.Navigator>
  );
}

export default function OnboardingStack(props) {
  console.log(props);
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        option={{
          headerTransparent: true,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        navigator={props.navigation}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        navigator={props.navigation}
      />
      <Stack.Screen name="AppStack" component={AppStack} />
    </Stack.Navigator>
  );
}

// function test1(props) {
//     const [dataUser,setDataUser] = useState();
//     useEffect(() => {
//         fetch('http://192.168.71.105:8001/test', {
//             method: 'POST',
//             headers: {
//                 Accept: 'application/json',
//                 'Content-Type': 'applicatiron/json'
//             },
//             body: JSON.stringify({
//                 user: 'Sakeshioyaki',
//                 id: '1'
//             })
//         }).then((response) => response.json()
//         ).then( (json) => {
//             console.log(json);
//             setDataUser(json.mysong);
//             }
//         ).catch((error) => {
//             console.error(error);
//         })
//     },[]);
//     return(
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//         <Button
//         onPress= {() => props.navigation.navigate('Home', {
//             id : 1,
//             song : dataUser,
//         })}
//         title="Move to home"
//         color="#841584"
//         accessibilityLabel="Learn more about this purple button"
//         />
//         </View>
//     )
// }

// function Screens (props){
//     return(
//         <NavigationContainer>
//             <Stack.Navigator >
//                 <Stack.Screen
//                 name="TabHome"
//                 component={TabHome}
//                 options={{ headerShown: false }}
//                 />
//                 <Stack.Screen name ="Login" component={Login} options={{headerShown: false}}/>
//                 <Stack.Screen  name="SignUp" component={SignUp} options={{headerShown: false}}/>
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// };

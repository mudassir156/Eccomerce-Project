import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Entypo, MaterialCommunityIcons, EvilIcons } from '@expo/vector-icons';
import RealHome from './Screens/RealHome';
import Profile from './Screens/Profile';
import Search from './Screens/Search';
import Products from './Screens/Products';

// const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();



function BottomTab() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarLabel: '', // Remove text label
          tabBarIcon: ({ focused, color, size }) => {
            let iconComponent;
  
            switch (route.name) {
              case 'RealHome':
                iconComponent = <Entypo name="home" size={size} color={focused ? 'green' : 'gray'} />;
                break;
              case 'Profile':
                iconComponent = <MaterialCommunityIcons name="account" size={size} color={focused ? 'green' : 'gray'} />;
                break;
              case 'Search':
                iconComponent = <EvilIcons name="search" size={27} color={focused ? 'green' : 'gray'} />;
                break;
              default:
                iconComponent = null;
            }
  
            return iconComponent;
          },
        })}
      >
        <Tab.Screen name='RealHome' component={RealHome} options={{ headerShown: false }} />
        <Tab.Screen name='Search' component={Search} options={{ headerShown: false }} />
        <Tab.Screen name='Profile' component={Profile} options={{ headerShown: false }} />
      </Tab.Navigator>
    );
  }
  
 
  

export default BottomTab;

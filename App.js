import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './BottomTab';
import Products from './Screens/Products';
import ProductDetail from './Screens/ProductDetail';
import Favourites from './Screens/Favourites';
import Orders from './Screens/Orders';
import Cart from './Screens/Cart';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'; 
import { StatusBar } from 'react-native';
import Login from './Screens/Login';
import Signup from './Screens/Signup';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
    <StatusBar hidden />
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='Login' component={gestureHandlerRootHOC(Login)} options={{ headerShown: false }}/>
      <Stack.Screen name='Signup' component={gestureHandlerRootHOC(Signup)} options={{ headerShown: false }}/>

        <Stack.Screen name='Home' component={gestureHandlerRootHOC(BottomTab)} options={{ headerShown: false }} />
        <Stack.Screen name='Products' component={gestureHandlerRootHOC(Products)} options={{ headerShown: false }} />
        <Stack.Screen name='ProductDetail' component={gestureHandlerRootHOC(ProductDetail)} options={{ headerShown: false }} />
        <Stack.Screen name='Favourites' component={gestureHandlerRootHOC(Favourites)} options={{ headerShown: false }} />
        <Stack.Screen name='Orders' component={gestureHandlerRootHOC(Orders)} options={{ headerShown: false }} />
        <Stack.Screen name='Cart' component={gestureHandlerRootHOC(Cart)} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

export default App;

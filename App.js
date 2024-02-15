import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './BottomTab';
import Products from './Screens/Products';
import ProductDetail from './Screens/ProductDetail';
import  Favourites  from './Screens/Favourites';
import Orders from './Screens/Orders';
import Cart from './Screens/Cart';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={BottomTab} options={{ headerShown: false }} />
        <Stack.Screen name='Products' component={Products} options={{ headerShown: false }} />
        <Stack.Screen name='ProductDetail' component={ProductDetail} options={{ headerShown: false }} />
        <Stack.Screen name='Favourites' component={Favourites} options={{ headerShown: false }} />
        <Stack.Screen name='Orders' component={Orders} options={{ headerShown: false }} />
        <Stack.Screen name='Cart' component={Cart} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

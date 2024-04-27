import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, MaterialCommunityIcons, EvilIcons } from '@expo/vector-icons';
import RealHome from './Screens/RealHome';
import Profile from './Screens/Profile';
import Search from './Screens/Search';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { View, StyleSheet, Animated } from 'react-native';

const Tab = createBottomTabNavigator();

// const RotatingIcon = ({ focused, iconComponent }) => {
//   const translateY = focused ? -7 : 0;

//   return (
//     <View style={styles.iconContainer}>
//       <Animated.View style={{ transform: [{ translateY }] }}>
//         <View style={styles.circularBackground}>
//           {iconComponent}
//         </View>
//       </Animated.View>
//     </View>
//   );
// };

const BottomTab = () => {
  return (
    <Tab.Navigator
    
      screenOptions={({ route }) => ({
        tabBarLabel: '', // Remove text label
        tabBarIcon: ({ focused, color, size }) => {
          let iconComponent;
          switch (route.name) {
            case 'RealHome':
              iconComponent = <Entypo name="home" size={size} color={focused ? 'green' : 'black'} />;
              break;
            case 'Profile':
              iconComponent = <MaterialCommunityIcons name="account" size={size} color={focused ? 'green' : 'black'} />;
              break;
            case 'Search':
              iconComponent = <EvilIcons name="search" size={27} color={focused ? 'green' : 'black'} />;
              break;
            default:
              iconComponent = null;
          }

          return (
            // <RotatingIcon focused={focused} iconComponent={iconComponent} />
            <>
            {iconComponent}
            </>
          );
        },
        tabBarStyle: { backgroundColor: 'gray',bottom:15,borderRadius:30,marginLeft:12,marginRight:12 }
      })}
    >
      <Tab.Screen name='RealHome' component={RealHome} options={{ headerShown: false }} />
      <Tab.Screen name='Search' component={Search} options={{ headerShown: false }} />
      <Tab.Screen name='Profile' component={Profile} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: 'transparent',
    borderRadius: 20,
    // padding: 10,
   

  },
  circularBackground: {
    backgroundColor: '#F2F2F2',
    borderRadius: 100, // Half of the width and height to make it circular
    width: 43, // Adjust size according to your preference
    height: 42, // Adjust size according to your preference
    justifyContent: 'center',
    alignItems: 'center',
    // bottom:hp('2'),
  },
});

export default BottomTab;

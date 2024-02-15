import React from "react";
import { useState, useEffect } from "react";
import { SafeAreaView, View, Text, StyleSheet, ImageBackground, Image, Dimensions, TouchableOpacity,FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, MaterialIcons, AntDesign, EvilIcons, MaterialCommunityIcons, Octicons, Entypo } from '@expo/vector-icons';
import { profilesetting } from "./Data";


const Profile = () => {
const navigation=useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={{uri:"https://images.pexels.com/photos/955617/pexels-photo-955617.jpeg?auto=compress&cs=tinysrgb&w=600"}}
        style={{ width: '100%', height: 200 }}
        resizeMode="cover"
      />
      <View style={styles.circleContainer}>
        <Image
          source={{ uri: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600" }}
          style={styles.circleImage}
          resizeMode="cover"
        />
      </View>
      <View className="items-center top-24">
      <Text className="font-bold text-xl">Joen doe</Text>
      <View className="rounded-xl pl-3 pr-3 pb-1 bg-blue-200 ">
        <Text>user@gmail.com</Text>
      </View>
      </View>
      <View className="mt-32">
      <View style={{ marginHorizontal: 12 }}>
      {/* Favourites */}
      {profilesetting({
        icon:<MaterialIcons name="favorite-border" size={29} color="black" />,
        name:'Favourites',
        onpress:()=>{navigation.navigate('Favourites')}
      })}
     
      {/* Orders */}
      {profilesetting({
        icon:<Entypo name="shopping-bag" size={26} color="black" />,
        name:'Orders',
        onpress:()=>{navigation.navigate('Orders')}
      })}

      {/* Cart */}
      {profilesetting({
        icon:<Ionicons name="cart-outline" size={24} color="black" />,
        name:'Cart',
        onpress:()=>{navigation.navigate('Cart')}
      })}
      
      {/* Clear Cache */}
      {profilesetting({
        icon:<MaterialCommunityIcons name="cached" size={24} color="black" />,
        name:'Clear Cache',
        // onpress:()=>{navigation.navigate('clear cache')}
      })}
    
      {/* Delete Account */}
      {profilesetting({
        icon: <AntDesign name="deleteuser" size={24} color="black" />,
        name:'Delete Account',
        // onpress:()=>{navigation.navigate('Delete account')}
      })}
      
      {/* Logout */}
      {profilesetting({
        icon: <AntDesign name="logout" size={24} color="black" />,
        name:'Logout',
        // onpress:()=>{navigation.navigate('Logout')}
      })}
    </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  circleContainer: {
    position: 'absolute',
    bottom: 480,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent', // Change this to the desired background color if needed
    borderRadius: Dimensions.get('window').width / 2, // Ensures the container is a circle
    overflow: 'hidden', // Clips the content to the container's bounds
    width: Dimensions.get('window').width * 0.5, // Adjust the width of the circle as needed
    height: Dimensions.get('window').width * 0.5, // Adjust the height of the circle as needed
  },
  circleImage: {
    width: '100%',
    height: '100%',
    borderRadius: Dimensions.get('window').width / 2, // Ensures the image inside the circle container is also a circle
  },
});

export default Profile;

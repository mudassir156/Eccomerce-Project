import { useState,useEffect } from "react";
import { View,Text,TouchableOpacity,StyleSheet,TextInput,Linking } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
const Signup = () => {
  const navigation=useNavigation();
  const [pressed,setPressed]=useState(false)
  const [ispressed,setisPressed]=useState(false)
  const handlePress =()=>{
    setPressed(true);
    setisPressed(false)
  }
  const passwordPress =()=>{
    setisPressed(true);
    setPressed(false);
  }
  const handleBlur = () => {
    setPressed(false);
    setisPressed(false);
  };
  const handleSocialMediaClick = (platform) => {
    // Define the URLs for your social media profiles
    const socialMediaURLs = {
      facebook: 'https://www.facebook.com',
      google: 'https://www.google.com'
      // Add more URLs as needed
    };

    // Open the corresponding social media profile in the browser
    Linking.openURL(socialMediaURLs[platform]);
  };
  const googleLogoColor = '#eb4034';

    return ( <View className="mt-8 ml-2 mr-2">
        <TouchableOpacity onPress={() => navigation.goBack()} className="mr-0 pr-0 w-5">
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-3xl font-bold mt-5 mb-20">Sign up</Text>

        <View className="m-4 ml-1 mr-1 relative bg-white rounded">
      <View className=" absolute top-2 left-3 " >
        <Text className=" text-gray-500 text-sm">Name</Text>
      </View>
      <TextInput
      className="border border-rose-500 p-4 pt-6 rounded "
      style={{ borderColor: pressed ? "rgb(225 29 72)" : "transparent", borderWidth: 1, }}
      keyboardType="default"
      autoCapitalize="words"
        autoCorrect={false}
        onFocus={handlePress}
        onBlur={handleBlur}
      />
    </View>
        
        <View className="m-4 ml-1 mr-1 relative bg-white rounded">
      <View className=" absolute top-2 left-3 " >
        <Text className=" text-gray-500 text-sm">Email</Text>
      </View>
      <TextInput
      className="border border-rose-500 p-4 pt-6 rounded "
      style={{ borderColor: pressed ? "rgb(225 29 72)" : "transparent", borderWidth: 1, }}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        onFocus={handlePress}
        onBlur={handleBlur}
      />
    </View>

    <View className="m-1 ml-1 mr-1 relative bg-white rounded">
      
      <TextInput
      className="border p-4 pt-4 rounded "
      style={{ borderColor: ispressed ? "rgb(225 29 72)" : "transparent", borderWidth: 1, }}
      secureTextEntry={true}
        autoCapitalize="none"
        autoCorrect={false}
        onFocus={passwordPress}
        onBlur={handleBlur}
        placeholder="password"
      />
    </View>
      
<View className="">
  <Text className="text-right text-base">Already have an account? <AntDesign name="arrowright" size={20} color="red" /> </Text>
</View>

<TouchableOpacity
      className="mt-6 w-26 h-14 rounded-3xl  transparent  bg-red-500 justify-center"
        // onPress={handlePress}
      >
        <Text className="text-center font-bold text-white text-base" >Signup</Text>
        </TouchableOpacity>
        <View className="mt-36 items-center">
          <Text className="text-base">Or signup with social account</Text>
          <View className="flex-row  m-3">
            <TouchableOpacity className=" w-10 h-10 pt-2 mr-3 pl-2  rounded-3xl text-center bg-white" onPress={() => handleSocialMediaClick('google')}><FontAwesome name="google" size={24} color={googleLogoColor} /></TouchableOpacity>
         <TouchableOpacity className=" w-10 h-10 pt-2 pl-3   rounded-3xl text-center bg-white" onPress={() => handleSocialMediaClick('facebook')}><FontAwesome name="facebook" size={24} color="blue" /></TouchableOpacity> 
          </View>
        </View>
    </View>
  
  );
};


export default Signup;
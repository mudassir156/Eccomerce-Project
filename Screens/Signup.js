import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Linking } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { FIREBASE_AUTH } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup = () => {
  const navigation = useNavigation();
  const [pressed, setPressed] = useState(false);
  const [ispressed, setisPressed] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 const [username,setUserName]=useState('')
  const auth = FIREBASE_AUTH;

  const createaccount = async () => {
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password,username);
      console.log(response);
      alert('Check your email!');

      await AsyncStorage.setItem('user_email', email);
      await AsyncStorage.setItem('user_password', password);
      
    } catch (error) {
      console.log(error);
      alert('Signup failed' + error);
    }
  };

  const handlePress = () => {
    setPressed(true);
    setisPressed(false);
  };

  const passwordPress = () => {
    setisPressed(true);
    setPressed(false);
  };

  const handleBlur = () => {
    setPressed(false);
    setisPressed(false);
  };

  const handleSocialMediaClick = (platform) => {
    const socialMediaURLs = {
      facebook: 'https://www.facebook.com',
      google: 'https://www.google.com'
    };

    Linking.openURL(socialMediaURLs[platform]);
  };

  const googleLogoColor = '#eb4034';

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="chevron-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.heading}>Sign up</Text>

      <View style={styles.inputContainer}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Name</Text>
        </View>
        <TextInput
          style={[styles.input, { borderColor: pressed ? "rgb(225, 29, 72)" : "transparent" }]}
          keyboardType="default"
          autoCapitalize="words"
          autoCorrect={false}
          onFocus={handlePress}
          onBlur={handleBlur}
          onChangeText={setUserName}
        />
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Email</Text>
        </View>
        <TextInput
          style={[styles.input, { borderColor: pressed ? "rgb(225, 29, 72)" : "transparent" }]}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          onFocus={handlePress}
          onBlur={handleBlur}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, { borderColor: ispressed ? "rgb(225, 29, 72)" : "transparent" }]}
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
          onFocus={passwordPress}
          onBlur={handleBlur}
          placeholder="Password"
          onChangeText={setPassword}
        />
      </View>

      <View style={styles.haveAccount}>
        <Text style={styles.haveAccountText}>Already have an account?</Text>
        <AntDesign name="arrowright" size={20} color="red" />
      </View>

      <TouchableOpacity style={styles.signupButton} onPress={createaccount}>
        <Text style={styles.signupButtonText}>Signup</Text>
      </TouchableOpacity>

      <View style={styles.socialMediaContainer}>
        <Text style={styles.socialMediaText}>Or signup with social account</Text>
        <View style={styles.socialMediaButtons}>
          <TouchableOpacity style={styles.socialMediaButton} onPress={() => handleSocialMediaClick('google')}>
            <FontAwesome name="google" size={24} color={googleLogoColor} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialMediaButton} onPress={() => handleSocialMediaClick('facebook')}>
            <FontAwesome name="facebook" size={24} color="blue" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginLeft: 2,
    marginRight: 2,
  },
  backButton: {
    marginRight: 0,
    paddingRight: 0,
    width: 24,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 20,
  },
  inputContainer: {
    margin: 4,
    marginLeft: 1,
    marginRight: 1,
    backgroundColor: "white",
    borderRadius: 5,
  },
  labelContainer: {
    position: "absolute",
    top: 6,
    left: 12,
  },
  label: {
    color: "gray",
    fontSize: 14,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    paddingTop: 8,
    borderRadius: 5,
  },
  haveAccount: {
    marginTop: 20,
    alignItems: "flex-end",
  },
  haveAccountText: {
    textAlign: "right",
    fontSize: 14,
  },
  signupButton: {
    marginTop: 6,
    width: 100,
    height: 40,
    borderRadius: 20,
    backgroundColor: "red",
    justifyContent: "center",
  },
  signupButtonText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    color: "white",
  },
  socialMediaContainer: {
    marginTop: 36,
    alignItems: "center",
  },
  socialMediaText: {
    fontSize: 14,
  },
  socialMediaButtons: {
    flexDirection: "row",
    margin: 3,
  },
  socialMediaButton: {
    width: 40,
    height: 40,
    paddingTop: 10,
    paddingLeft: 10,
    borderRadius: 20,
    alignItems: "center",
    backgroundColor: "white",
    marginRight: 3,
  },
});

export default Signup;

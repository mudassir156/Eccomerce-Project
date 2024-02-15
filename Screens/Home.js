import React from "react";
import { useState ,useEffect} from "react";
import { SafeAreaView,View,Text,StyleSheet,ImageBackground,Image, Dimensions,TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
//     const {width, height} = Dimensions.get("window");
const [isPressed, setIsPressed] = useState(false);
const [signPressed ,setsignPressed]=useState(false);
 const navigation=useNavigation();
  const handlePress = () => {
    navigation.navigate("Login");
    setIsPressed(!isPressed);
  };
  const signpress=()=>{
    navigation.navigate("Signup");
      setsignPressed(!signPressed);
  }
  useEffect(() => {
      const unsubscribe = navigation.addListener("focus", () => {
        // Reset states when the component is focused (navigated back)
        setIsPressed(false);
        setsignPressed(false);
      });
  
      return unsubscribe;
    }, [navigation]);
    return ( 
      
      <View style={styles.container}>
      <ImageBackground
        source={require('../assets/img.jpg')}
        style={styles.imageBackground}
      >
        <View style={styles.overlay}>
          <Text style={styles.text } className="mx-0.5 mt-80">Start you Shopping Journey Now</Text>
        <Text className="ml-4 mr-4 text-center text-lg text-gray-300">Fashion is about something that comes from within you</Text>
        
        <View className="mt-20">
        <TouchableOpacity
        style={[styles.btn, { backgroundColor: isPressed ? 'rgb(245, 136, 54)' : 'rgba(0, 0, 0, 0.4)' }]}
        onPress={handlePress}
      >
        <Text style={styles.btntxt} >Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={[styles.btn, { backgroundColor: signPressed ? 'rgb(245, 136, 54)' : 'rgba(0, 0, 0, 0.4)' }]}
        onPress={signpress} 
      >
        <Text style={styles.btntxt} >Sign up</Text>
        </TouchableOpacity>
        </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'contain'
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent black overlay
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
   textAlign:'center'
  },
  btn:{
      // backgroundColor: 'rgba(0, 0, 0, 0.5)',
      width:320,
      padding:15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'rgb(245, 136, 54)',  
    margin:12
  },
  btntxt:{
      color: 'white',
      fontWeight: 'bold',
      textAlign:'center',
  }
});
export default Home;

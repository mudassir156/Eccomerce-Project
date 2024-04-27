import React from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView,StyleSheet,Modal,TextInput } from 'react-native';
import RNPickerSelect from 'react-native-picker-select'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons, MaterialIcons, AntDesign, EvilIcons, MaterialCommunityIcons, Octicons, Entypo } from '@expo/vector-icons';
import { useRoute, useNavigation } from '@react-navigation/native';
import Animated from 'react-native-reanimated';
import { FadeInDown } from 'react-native-reanimated';
import { FIREBASE_DB } from "../firebaseConfig";
import { serverTimestamp, addDoc, collection } from "firebase/firestore";

const ProductDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { cardData } = route.params;
  const [isFavorited, setIsFavorited] = useState(false);
  const [isCart,setIsCart]=useState(false)
  const [count,setCount]=useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalorder,setIsModalorder]=useState(false);
  const [selectedCountry,setSelectedCountry]=useState('')
  const [email,setEmail]=useState('')
  const [cardInfo,setCardInfo]=useState('')
  const [NameOnCard,setNameOnCard]=useState('')
  const [isOrder,setIsOrder]=useState(false)
  const [isModalOrderVisible, setIsModalOrderVisible] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [cardInfoError, setCardInfoError] = useState('');

   const paymentdata={
    title:cardData.title,
    Description:cardData.description,
    Img:cardData.img4,
    price:cardData.price,
    Email:email,
    cardInfo:cardInfo,
    NameOnCard:NameOnCard,
    Country:selectedCountry
   }
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const toggleModalOrder = () => {
    setIsModalOrderVisible(!isModalOrderVisible);
  };

  const toggleFavorite = async () => {
    setIsFavorited(!isFavorited);
    if (!isFavorited) {
      try {
        const docRef = await addDoc(collection(FIREBASE_DB, 'favorites'), {
          ...cardData,
        });
        
      } catch (e) {
        console.error('Error adding document: ', e);
      }
    }
  };
   
  const toggleOrder = async () => {
    setIsOrder(!isOrder);
    if (!isOrder) {
      try {
        const docRef = await addDoc(collection(FIREBASE_DB, 'Order'), {
          ...paymentdata,
        });
        
      } catch (e) {
        console.error('Error adding document: ', e);
      }
    }
  };
   
  
  const toggleCart = async () => {
    setIsCart(!isCart);
    if (!isCart) {
      try {
        const docRef = await addDoc(collection(FIREBASE_DB, 'AddToCart'), {
          ...cardData,
        });
      } catch (e) {
        console.error('Error adding document: ', e);
      }
    }
  };

  const handlePayment = () => {
    if (email && cardInfo && NameOnCard && selectedCountry) {
      // Perform payment logic here
      alert('Payment successful!');
    } else {
      alert('Please enter all payment information');
    }
  };
   
  const validateEmail = () => {
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  };

  const validateCardInfo = () => {
    // Perform card information validation logic here
    if (cardInfo.length < 16) {
      setCardInfoError('Invalid card information');
    } else {
      setCardInfoError('');
    }
  };

  const handlePayButtonPress = () => {
    validateEmail();
    validateCardInfo();

    if (!emailError && !cardInfoError) {
      handlePayment();
    }
  };

  const incre=()=>{
       const res=count+1;
       setCount(res);
  }
  const decre=()=>{
    if(count>1){
      const res=count-1;
      setCount(res);
    }
    else{
      setCount(1);
    }
}

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{flex:1}}>
          <View style={{ marginTop: -48 }}>
          <Animated.Image
    entering={FadeInDown.delay(200)}
    source={{ uri: cardData.img4 }}
    style={{
        width: '100%',
        height: 300, // Set the desired height here
        marginBottom: -59
    }}
    resizeMode='contain'
/>
<Animated.View entering={FadeInDown.delay(300)} style={{ position: 'absolute', top: 55, left: 10, flexDirection: 'row', zIndex: 10 }}>
    <TouchableOpacity onPress={() => navigation.goBack()} style={{ width: 26, height: 27, backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: 23, marginRight: '2%', marginLeft: '2%', justifyContent: 'center', alignItems: 'center' }}>
        <Ionicons name="chevron-back" size={24} color="white" />
    </TouchableOpacity>
    <View>
        <TouchableOpacity onPress={toggleFavorite} style={{ marginLeft: hp('32%'), marginRight: '2%' }}>
            
            <MaterialIcons name={isFavorited ? "favorite" : "favorite-border"} size={30} color={isFavorited ? "green" : "black"} />
        </TouchableOpacity>
    </View>
</Animated.View>



          </View>

          {/* Card view */}
          <View style={{ backgroundColor: 'white', paddingTop: 20, borderRadius: 30, zIndex: 10,paddingBottom: hp('10%') }}>
            <View style={{ margin: 16, marginTop: 4 }} >
              {/* Title with FadeInDown animation */}
              <Animated.View entering={FadeInDown.delay(400)} >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ fontWeight: 'bold', textTransform: 'capitalize', fontSize: 28 }}>{cardData.title}</Text>
                  <View style={{ position: 'absolute', right: 10 }}>
                    <Text style={{ fontWeight: 'bold', textTransform: 'capitalize', fontSize: 22, backgroundColor:'skyblue', borderRadius: 8, paddingLeft: 8, paddingRight: 8, bottom: -1 }} >${cardData.price}</Text>
                  </View>
                </View>
              </Animated.View>

              {/* Star rating with FadeInDown animation */}
              <Animated.View entering={FadeInDown.delay(500)}>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                  <View style={{ flexDirection: 'row' }}>
                    {[1, 2, 3, 4, 5].map((_, index) => (
                      <MaterialIcons key={index} name="star-rate" size={24} color="orange" />
                    ))}
                    <Text style={{ marginLeft: 2, top: 1 }}>(4.9)</Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 116 }}>
                    <TouchableOpacity onPress={incre}>
                      <Ionicons name="add-circle-outline" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={{ marginHorizontal: 5 }} >{count}</Text>
                    <TouchableOpacity style={{ marginTop: 1 }} onPress={decre}>
                      <AntDesign name="minuscircleo" size={19} color="black" />
                    </TouchableOpacity>
                  </View>
                </View>
              </Animated.View>

              {/* Description with FadeInDown animation */}
              <View >
                <View style={{ marginTop: 30 }}>
                  <Animated.Text entering={FadeInDown.delay(600)} style={{ fontSize: 25, fontWeight: 'bold' }}>Description</Animated.Text>
                  <Animated.Text entering={FadeInDown.delay(700)} style={{ color: 'gray', marginTop: 5, lineHeight: 20 }}>{cardData.detail}</Animated.Text>
                </View>
              </View>

              {/* Location and delivery with FadeInDown animation */}
              <Animated.View entering={FadeInDown.delay(800)}>
                <View style={{ flexDirection: 'row', marginTop: 20 }} >
                  <View style={{flexDirection:'row',alignItems:'center'}} >
                    <EvilIcons name="location" size={33} color="black" />
                    <Text>Karachi</Text>
                  </View>
                  <View style={{flexDirection:'row', marginHorizontal: 125,alignItems:'center' }}>
                    <MaterialCommunityIcons name="truck-delivery" size={24} color="black" />
                    <Text style={{left:6}}>Free delivery</Text>
                  </View>
                </View>
              </Animated.View>

              {/* Dots with FadeInDown animation */}
              <Animated.View entering={FadeInDown.delay(900)}>
                <View style={{ flexDirection: 'row', marginTop: 20 }} >
                  {[1, 2, 3, 4, 5].map((_, index) => (
                    <Octicons key={index} name="dot-fill" size={60} color={index === 0 ? 'orange' : 'black'} style={{ marginHorizontal: 12 }} />
                  ))}
                </View>
              </Animated.View>

              {/* Buy Now with FadeInDown animation */}
              <Animated.View entering={FadeInDown.delay(1000)}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }} >
                <TouchableOpacity
        style={{ backgroundColor: 'black', borderRadius: 20, paddingVertical: 8, paddingHorizontal: 80, marginTop: 12, marginBottom: 35 }}
        onPress={toggleModal}
      >
        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', textTransform: 'uppercase' }}>Buy Now</Text>
      </TouchableOpacity>

      <Modal
  animationType="slide"
  transparent={false}
  visible={isModalVisible}
  onRequestClose={toggleModal}
>
  <View style={styles.modalContainer}>
      <Text style={styles.modalTitle}>Payment Details</Text>
      {/* Email Input */}
      <TextInput
        style={[styles.input, emailError && styles.errorInput]}
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
        onBlur={validateEmail}
      />
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

      {/* Card Information Input */}
      <TextInput
        style={[styles.input, cardInfoError && styles.errorInput]}
        placeholder="Card Information"
        onChangeText={(text) => setCardInfo(text)}
        onBlur={validateCardInfo}
      />
      {cardInfoError ? <Text style={styles.errorText}>{cardInfoError}</Text> : null}

      {/* Name on Card Input */}
      <TextInput
        style={styles.input}
        placeholder="Name on Card"
        onChangeText={(text) => setNameOnCard(text)}
      />

      {/* Country Dropdown */}
      <RNPickerSelect
  onValueChange={(value) => setSelectedCountry(value)}
  items={[
    { label: 'Pakistan', value: 'Pakistan' },
    { label: 'India', value: 'India' },
    { label: 'USA', value: 'USA' },
    { label: 'Canada', value: 'Canada' },
    { label: 'UK', value: 'UK' },
  ]}
  placeholder={{ label: "Select your country", value: null }} 
  style={{
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
      marginTop: 10,
    },
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: 'gray',
      borderRadius: 10,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
      marginTop: 10,
      width:30
    }}}
/>
      {/* Pay Button */}
      <TouchableOpacity
        style={styles.payButton}
        // onPress={handlePayment}
        onPress={() => {
          handlePayButtonPress(); 
          toggleOrder();   
        }}
      >
        <Text style={styles.payButtonText}>Pay</Text>
      </TouchableOpacity>
      
      
      {/* Close Modal Button */}
      <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
        <Text style={styles.closeButtonText}>Close</Text>
      </TouchableOpacity>
    </View>
    </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalOrderVisible}
        onRequestClose={toggleModalOrder}
      >
        <View style={styles.modalBackground}>

        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Your Order has been placed successfully!</Text>
          {/* Order details content */}
          <TouchableOpacity onPress={toggleModalOrder} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
        </View>
      </Modal>
                  <TouchableOpacity onPress={toggleCart}>
                  <Entypo name="shopping-bag" size={32} color="black" style={{ marginLeft: 55,bottom:14 }} />
                  </TouchableOpacity>
                </View>
              </Animated.View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: wp('5%'), // Adjust padding based on screen width
  },
  modalTitle: {
    fontSize: wp('5%'), // Adjust font size based on screen width
    fontWeight: 'bold',
    marginBottom: hp('2%'), // Adjust margin based on screen height
  },
  input: {
    height: hp('6%'), // Adjust height based on screen height
    width: wp('80%'), // Adjust width based on screen width
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: wp('1%'), // Adjust border radius based on screen width
    marginBottom: hp('2%'), // Adjust margin based on screen height
    paddingHorizontal: wp('3%'), // Adjust padding based on screen width
  },
  payButton: {
    backgroundColor: 'blue',
    paddingVertical: hp('1%'), // Adjust vertical padding based on screen height
    paddingHorizontal: wp('5%'), // Adjust horizontal padding based on screen width
    borderRadius: wp('1%'), // Adjust border radius based on screen width
    alignItems: 'center',
    marginTop: hp('2%'), // Adjust margin based on screen height
  },
  payButtonText: {
    color: 'white',
    fontSize: wp('4%'), // Adjust font size based on screen width
    fontWeight: 'bold',
  },
  closeButton: {
    backgroundColor: 'red',
    padding: hp('1%'), // Adjust padding based on screen height
    borderRadius: wp('1%'), // Adjust border radius based on screen width
    alignItems: 'center',
    marginTop: hp('2%'), // Adjust margin based on screen height
   
  },
  closeButtonText: {
    color: 'white',
    fontSize: wp('4%'), // Adjust font size based on screen width
    fontWeight: 'bold',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Partially transparent white background
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default ProductDetail;

import React, { useState,useEffect } from "react";
import { Text, View, TextInput, Image, TouchableOpacity, KeyboardAvoidingView, ScrollView, FlatList ,Modal,StyleSheet} from "react-native";
import { EvilIcons, Entypo, FontAwesome5, Fontisto,MaterialIcons } from '@expo/vector-icons';
import Swiper from 'react-native-swiper'; // Import Swiper component correctly
import { useNavigation } from "@react-navigation/native";
import { renderItem, data } from "./Data";
import Animated from 'react-native-reanimated';
import { FadeInDown } from 'react-native-reanimated';
import { FIREBASE_DB } from "../firebaseConfig";
import { firestore, addDoc, collection } from "firebase/firestore";
// import { useCart } from './Cartcontext';
// const { cartItemCount } = useCart();

const RealHome = () => {
    const navigation = useNavigation();
    const imageurl = {
        img1: "https://images.pexels.com/photos/264726/pexels-photo-264726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        img2: "https://images.pexels.com/photos/1210484/pexels-photo-1210484.jpeg?auto=compress&cs=tinysrgb&w=600",
        img3: "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=600",
        img4: "https://images.pexels.com/photos/2933636/pexels-photo-2933636.jpeg?auto=compress&cs=tinysrgb&w=600"
    };

    

  
    
    return (
        <KeyboardAvoidingView enabled>
            <ScrollView>
                <View style={{ flex:1 }}>
                    <Animated.View entering={FadeInDown.delay(300)} style={{ marginTop: 20, marginLeft: 4, flexDirection: 'row', alignItems: 'center' }}>
                    <EvilIcons name="location" size={24} color="black" />
            <Text style={{marginHorizontal:122}}>location</Text>
                        <Entypo name="shopping-bag" size={26} color="black" style={{ marginTop: 3 }} />
                        <Text style={{ position: 'absolute', left: 325, paddingLeft: 4, width: 15, height: 15, bottom: 13, borderRadius: 12, backgroundColor: 'green', fontSize: 10 }}>1</Text>
                    </Animated.View>

                    <View style={{ margin: 4 }}>
                        <Animated.Text entering={FadeInDown.delay(400)} style={{ fontSize: 36, fontWeight: 'bold', textTransform: 'capitalize' }}>Explore top-tier<Animated.Text entering={FadeInDown.delay(350)} style={{ color: '#1c3f16', fontSize: 36, fontWeight: 'bold' }}> clothing luxury</Animated.Text></Animated.Text>
                    </View>
                    <Animated.View entering={FadeInDown.delay(500)} style={{ margin: 5, flexDirection: 'row', alignItems: 'center', borderColor: 'transparent', borderRadius: 12, padding: 8, backgroundColor: '#d5ffff', bottom: 12 }}>

                        <EvilIcons name="search" size={27} color="black" style={{ marginRight: 5 }} />
                        <TextInput
                            placeholder="What are you looking for?"
                            style={{ flex: 1, fontSize: 16, marginLeft: 3, color: 'black' }}
                            selectionColor={'gray'}
                        />

                        <FontAwesome5 name="camera" size={24} color="black" style={{ marginLeft: 5 }} />

                    </Animated.View>

                    {/*   */}
                    <Animated.View entering={FadeInDown.delay(600)} style={{ marginBottom: 530, height: 160 }}>
                        <Swiper
                            loop
                            autoplay
                            dot={<View style={{ backgroundColor: 'white', width: 6, height: 6, borderRadius: 4, marginLeft: 9, marginRight: 9, margin: 0, marginBottom: -9 }} />}
                            activeDot={<View style={{ backgroundColor: 'green', width: 12, height: 12, borderRadius: 6, marginLeft: 9, marginRight: 9, margin: 0, marginBottom: -9 }} />}
                        >
                            <Image source={{ uri: imageurl.img1 }} resizeMode="cover" style={{ flex: 1, marginLeft: 14, marginRight: 14, borderRadius: 22 }} />
                            <Image source={{ uri: imageurl.img2 }} resizeMode="cover" style={{ flex: 1, marginLeft: 14, marginRight: 14, borderRadius: 22 }} />
                            <Image source={{ uri: imageurl.img3 }} resizeMode="cover" style={{ flex: 1, marginLeft: 14, marginRight: 14, borderRadius: 22 }} />
                        </Swiper>
                    </Animated.View>

                    {/* Sales Section */}
                    <Animated.View entering={FadeInDown.delay(700)} style={{ flexDirection: "row", alignItems: 'center', marginLeft: 18, marginTop: -500, bottom: 20 }}>
                        <Text style={{ fontSize: 32, fontWeight: 'bold', color: 'black' }}>Sales</Text>
                        <TouchableOpacity style={{ marginLeft: 215, top: 2 }} onPress={() => navigation.navigate("Products")}>
                            <Fontisto name="microsoft" size={24} color="black" />
                        </TouchableOpacity>
                    </Animated.View>
                    <Animated.View entering={FadeInDown.delay(800)}>
                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={data}
                            keyExtractor={(item) => item.id}
                            renderItem={(item) => renderItem({ ...item, navigation })}
                        />
                    </Animated.View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
    
    
}

  

export default RealHome;

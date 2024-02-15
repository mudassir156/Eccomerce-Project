import React from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons, AntDesign, EvilIcons, MaterialCommunityIcons, Octicons, Entypo } from '@expo/vector-icons';
import { useRoute, useNavigation } from '@react-navigation/native';
import Animated from 'react-native-reanimated';
import { FadeInDown } from 'react-native-reanimated';

const ProductDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { cardData } = route.params;

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View style={{ marginTop: -48 }}>
            <Animated.Image entering={FadeInDown.delay(200)} source={{ uri: cardData.img4 }} style={{ flex: 1, width: '100%', height: undefined, aspectRatio: 1, marginBottom: -59 }} resizeMode='contain' />
            <Animated.View entering={FadeInDown.delay(300)} style={{ position: 'absolute', top: 78, left: 10, flexDirection: 'row', zIndex: 10 }}>
              <TouchableOpacity onPress={() => navigation.goBack()} style={{ width: 26, height: 27, backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: 23, marginRight: 260, marginLeft: 6, justifyContent: 'center', alignItems: 'center' }}>
                <Ionicons name="chevron-back" size={24} color="white" />
              </TouchableOpacity>
              <View>
                <TouchableOpacity>
                  <MaterialIcons name="favorite-border" size={30} color="black" />
                </TouchableOpacity>
              </View>
            </Animated.View>
          </View>

          {/* Card view */}
          <View style={{ backgroundColor: 'white', paddingTop: 20, borderRadius: 30, zIndex: 10,paddingBottom:16 }}>
            <View style={{ margin: 16, marginTop: 4 }} >
              {/* Title with FadeInDown animation */}
              <Animated.View entering={FadeInDown.delay(400)} >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ fontWeight: 'bold', textTransform: 'capitalize', fontSize: 28 }}>{cardData.title}</Text>
                  <View style={{ position: 'absolute', right: 10 }}>
                    <Text style={{ fontWeight: 'bold', textTransform: 'capitalize', fontSize: 22, backgroundColor:'skyblue', borderRadius: 8, paddingLeft: 8, paddingRight: 8, bottom: -1 }} >{cardData.price}</Text>
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
                    <TouchableOpacity>
                      <Ionicons name="add-circle-outline" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={{ marginHorizontal: 5 }} >1</Text>
                    <TouchableOpacity style={{ marginTop: 1 }}>
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
                  <TouchableOpacity style={{ backgroundColor: 'black', borderRadius: 20, paddingVertical: 8, paddingHorizontal: 80, marginTop: 12, marginBottom: 35 }}>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', textTransform: 'uppercase' }}>Buy Now</Text>
                  </TouchableOpacity>
                  <Entypo name="shopping-bag" size={32} color="black" style={{ marginLeft: 55,bottom:14 }} />
                </View>
              </Animated.View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProductDetail;

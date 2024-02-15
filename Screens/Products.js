import React, { useState, useRef, useEffect } from "react";
import { View, Text, FlatList, Animated, Easing, TouchableOpacity, SafeAreaView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { renderItem, data } from "./Data";
import { useNavigation } from "@react-navigation/native";


const Products = () => {
  const [numColumns, setNumColumns] = useState(2);
const navigation=useNavigation()
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: false,
      })
    ).start();
  }, [animatedValue]);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-200, 200],
  });

  return (
    <SafeAreaView style={{ flex: 1 ,marginTop:20}}>
      <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: "#3a5e98ff", borderRadius: 20, margin: 5, height: 27 }}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 2, width: 24, height: 24, backgroundColor: 'white', borderRadius: 23 }}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Animated.View style={{ marginLeft: 10, transform: [{ translateX }] }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>All Products </Text>
        </Animated.View>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={(item) => renderItem({ ...item, navigation })}
        numColumns={numColumns}
        contentContainerStyle={{ flexDirection: 'column' }}
      />
    </SafeAreaView>
  );
};

export default Products;

import React from "react";
import { View, Image, Text,ScrollView,TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import commonStyles from "./Style";
import { useNavigation } from "@react-navigation/native";
import Animated from 'react-native-reanimated';
import { FadeInDown } from 'react-native-reanimated';
const data=[{
    id:1,
    title:"Kid's shirt",
    description:"fashion design",
    price:"22.33",
    detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare eleifend velit, id blandit nulla bibendum eu. Maecenas varius, quam vel convallis dictum, velit metus consequat est, ac pharetra libero odio nec sapien. Cras non metus vestibulum, aliquam risus a, ultricies tortor. Integer eu ligula vitae purus laoreet varius",
    img4:"https://images.pexels.com/photos/2933636/pexels-photo-2933636.jpeg?auto=compress&cs=tinysrgb&w=600"
},
{
    id:2,
    title:'women',
    description:"fashion design",
    price:'45.2',
    detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare eleifend velit, id blandit nulla bibendum eu. Maecenas varius, quam vel convallis dictum, velit metus consequat est, ac pharetra libero odio nec sapien. Cras non metus vestibulum, aliquam risus a, ultricies tortor. Integer eu ligula vitae purus laoreet varius",
    img4:"https://images.pexels.com/photos/2933636/pexels-photo-2933636.jpeg?auto=compress&cs=tinysrgb&w=600"
},
{
    id:3,
    title:'women',
    description:"fashion design",
    price:'45.2',
    detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare eleifend velit, id blandit nulla bibendum eu. Maecenas varius, quam vel convallis dictum, velit metus consequat est, ac pharetra libero odio nec sapien. Cras non metus vestibulum, aliquam risus a, ultricies tortor. Integer eu ligula vitae purus laoreet varius",
    img4:"https://images.pexels.com/photos/2933636/pexels-photo-2933636.jpeg?auto=compress&cs=tinysrgb&w=600"
},
{
    id:4,
    title:'Men',
    description:"fashion design",
    price:'45.2',
    detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare eleifend velit, id blandit nulla bibendum eu. Maecenas varius, quam vel convallis dictum, velit metus consequat est, ac pharetra libero odio nec sapien. Cras non metus vestibulum, aliquam risus a, ultricies tortor. Integer eu ligula vitae purus laoreet varius",
    img4:"https://images.pexels.com/photos/2933636/pexels-photo-2933636.jpeg?auto=compress&cs=tinysrgb&w=600"
}
,
{
    id:5,
    title:'Men',
    description:"fashion design",
    price:'45.2',
    detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare eleifend velit, id blandit nulla bibendum eu. Maecenas varius, quam vel convallis dictum, velit metus consequat est, ac pharetra libero odio nec sapien. Cras non metus vestibulum, aliquam risus a, ultricies tortor. Integer eu ligula vitae purus laoreet varius",
    img4:"https://images.pexels.com/photos/2933636/pexels-photo-2933636.jpeg?auto=compress&cs=tinysrgb&w=600"
}
,
{
    id:6,
    title:'Men',
    description:"fashion design",
    price:'45.2',
    detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare eleifend velit, id blandit nulla bibendum eu. Maecenas varius, quam vel convallis dictum, velit metus consequat est, ac pharetra libero odio nec sapien. Cras non metus vestibulum, aliquam risus a, ultricies tortor. Integer eu ligula vitae purus laoreet varius",
    img4:"https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=600"
},
{
    id:7,
    title:'Men',
    description:"fashion design",
    price:'45.2',
    detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare eleifend velit, id blandit nulla bibendum eu. Maecenas varius, quam vel convallis dictum, velit metus consequat est, ac pharetra libero odio nec sapien. Cras non metus vestibulum, aliquam risus a, ultricies tortor. Integer eu ligula vitae purus laoreet varius",
    img4:"https://images.pexels.com/photos/2933636/pexels-photo-2933636.jpeg?auto=compress&cs=tinysrgb&w=600"
}
]
const renderItem = ({ item,navigation,index }) => {
  // const navigation=useNavigation()
    return (
      <Animated.View entering={FadeInDown.delay(200*index)}>
        <TouchableOpacity onPress={()=>navigation.navigate("ProductDetail",{ cardData: item })}>
      <View style={commonStyles.itemContainer}>
        <Image source={{ uri: item.img4 }} style={commonStyles.image} />
        <Text style={commonStyles.title}>{item.title}</Text>
        <Text style={commonStyles.description}>{item.description}</Text>
        <View style={commonStyles.priceContainer}>
          <Text style={commonStyles.price}>${item.price}</Text>
          <Ionicons name="add-circle" size={27} color="black" />
        </View>
      </View>
       </TouchableOpacity>
       </Animated.View>
    );
  }
 
  

  const profilesetting=({icon,name,onpress})=>{
    return(
      <>
    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={onpress} >
          {icon}
          <Text style={{ marginLeft: 18, fontSize: 19, color: 'gray' }}>{name}</Text>
        </TouchableOpacity>
      </View>
      <View style={{ width: 340, height: 1.5, backgroundColor: 'gray', alignSelf: 'center', marginTop: 6 }}></View>
      </>)
  }

export  {renderItem,data,profilesetting};
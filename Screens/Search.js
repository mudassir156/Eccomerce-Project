import React from 'react'
import { useState,useEffect } from 'react';
import { Text,View,TextInput ,TouchableOpacity,Image} from 'react-native'
import { EvilIcons , FontAwesome5} from '@expo/vector-icons';

import { data,renderItem } from './Data';
const Search = () => {
  
  const [input,setInput]=useState('')
  const foundUser = data.find((item) => item.title.toLowerCase() === input.toLowerCase());
  useEffect(() => {
    // Clear input when the component mounts
    setInput('');
  }, []);
  return (
    <View>
    <View className='m-4 mt-14 flex-row items-center border border-transparent rounded-3xl p-2 bg-teal-50'>
      <FontAwesome5 name="camera" size={24} color="black" className="w-6 h-6 ml-2" />
      <TextInput
        placeholder="What are you looking for?"
        className='flex-1 text-base ml-3 ' 
        selectionColor={'gray'}       
        onChangeText={text=>setInput(text)}
      />
      <TouchableOpacity >
      <EvilIcons name="search" size={27} color="black" className="w-6 h-6 mr-5" />
      </TouchableOpacity>
      
    </View>
      {foundUser? 
      <View>
        <View style={{flexDirection:'row',backgroundColor:'white',margin:16,borderRadius:15,padding:12,alignItems:'center',marginTop:10}}>
        <Image source={{ uri: foundUser.img4 }} style={{width:60,height:62,borderRadius:8}} />
        <View style={{marginHorizontal:12}}>
        <Text className="font-bold capitalize text-xl" >{foundUser.title}</Text>
        <Text className="capitalize text-gray-500">{foundUser.description}</Text>
          <Text className="text-gray-500">{foundUser.price}</Text>
          </View>
          </View>
         </View>
      :null}
    </View>
  )
}

export default Search
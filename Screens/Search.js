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
      <View style={{ margin: 16, marginTop: 40, flexDirection: 'row', alignItems: 'center', borderRadius: 24, padding: 8, backgroundColor: '#E6FFFA' }}>
        <FontAwesome5 name="camera" size={24} color="black" style={{ width: 24, height: 24, marginLeft: 8 }} />
        <TextInput
          placeholder="What are you looking for?"
          style={{ flex: 1, fontSize: 16, marginLeft: 8 }}
          selectionColor={'gray'}
          onChangeText={(text) => setInput(text)}
        />
        <TouchableOpacity onPress={() => {}}>
          <EvilIcons name="search" size={27} color="black" style={{ width: 27, height: 27, marginRight: 8 }} />
        </TouchableOpacity>
      </View>
      {foundUser ? (
        <View style={{ flexDirection: 'row', backgroundColor: 'white', margin: 16, borderRadius: 15, padding: 12, alignItems: 'center', marginTop: 10 }}>
          <Image source={{ uri: foundUser.img4 }} style={{ width: 60, height: 62, borderRadius: 8 }} />
          <View style={{ marginHorizontal: 12 }}>
            <Text style={{ fontWeight: 'bold', textTransform: 'capitalize', fontSize: 20 }}>{foundUser.title}</Text>
            <Text style={{ textTransform: 'capitalize', color: '#A0AEC0' }}>{foundUser.description}</Text>
            <Text style={{ color: '#A0AEC0' }}>{foundUser.price}</Text>
          </View>
        </View>
      ) : null}
    </View>
  )
}

export default Search
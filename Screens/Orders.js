import React, { useState, useEffect } from 'react';
import { Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { collection, getDocs, deleteDoc ,doc} from 'firebase/firestore'; // Import deleteDoc function
import { FIREBASE_DB } from "../firebaseConfig";
import { AntDesign,Ionicons } from '@expo/vector-icons';
import { useRoute, useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const Orders = () => {
  const [OrderProducts, setOrderProducts] = useState([]);
  const [delp,setDelp]=useState(false)
  useEffect(() => {
    const FetchOrderProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(FIREBASE_DB, 'Order'));
        const products = [];
        querySnapshot.forEach((doc) => {
          products.push({ docid: doc.id, ...doc.data() }); // Include document ID in the data
        });
        setOrderProducts(products);
      } catch (error) {
        console.error('Error fetching Order products: ', error);
      }
    };
    
    FetchOrderProducts();
  }, []);

  const navigation = useNavigation();

  // const deleteProduct = async (id) => {
  //   setDelp(!delp)
  //   try {
  //     await deleteDoc(doc(collection(FIREBASE_DB, 'favorites'), id));

  //     setFavoriteProducts(favoriteProducts.filter((product) => product.id !== id));
  //   } catch (error) {
  //     console.error('Error deleting product: ', error);
  //   }
  // };
  
  return (
    <View style={{ marginTop: 20 }}>
     <View style={{flexDirection:'row',alignItems:'center'}}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ width: 26, height: 27, backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: 23, marginRight: '2%', marginLeft: '2%', justifyContent: 'center', alignItems: 'center' }}>
        <Ionicons name="chevron-back" size={24} color="white" />
      </TouchableOpacity>
      <Text style={{color: 'rgba(0, 0, 0, 0.9)',marginRight: '2%', marginLeft: '2%', justifyContent: 'center', alignItems: 'center',fontSize:30,fontWeight:'bold',letterSpacing:3}}>Order</Text>
      </View>
    {!delp &&  <FlatList
        data={OrderProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <View style={{ flexDirection: 'row', backgroundColor: 'white', margin: 16, borderRadius: 15, padding: 12, alignItems: 'center', marginTop: 10 }}>
              <Image source={{ uri: item.Img }} style={{ width: 60, height: 62, borderRadius: 8 }} />
              <View style={{ marginHorizontal: 12 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20, textTransform: 'capitalize' }}>{item.title}</Text>
                <Text style={{ textTransform: 'capitalize', color: 'gray' }}>{item.Description}</Text>
                <Text style={{ color: 'gray' }}>{item.price}</Text>
              </View>
             <Text style={{borderRadius:12,backgroundColor:"#2E4C4F" ,padding:12,color:'white',marginHorizontal:60}}>Paid</Text>
            </View>
          </View>
        )}
      /> }
     
    </View>
  );
}

export default Orders;

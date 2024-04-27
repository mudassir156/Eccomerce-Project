import React, { useState, useEffect } from 'react';
import { Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'; // Import deleteDoc function
import { FIREBASE_DB } from "../firebaseConfig";
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const Cart = () => {
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [delp, setDelp] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const { cartItemCount, setCartItemCount } = useState(0); // Use the context hook

  useEffect(() => {
    const fetchFavoriteProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(FIREBASE_DB, 'AddToCart'));
        const products = [];
        let total = 0; // Initialize total price
        querySnapshot.forEach((doc) => {
          const product = { docid: doc.id, ...doc.data() };
          products.push(product);
          total += parseFloat(product.price); // Add price of each product to total
        });
        setFavoriteProducts(products);
        setTotalPrice(total.toFixed(2)); // Store total price with 2 decimal places
        setCartItemCount(products.length); // Update cart item count
        console.log(cartItemCount)
      } catch (error) {
        console.error('Error fetching Cart products: ', error);
      }
    };

    fetchFavoriteProducts();
  }, [delp, setCartItemCount]); // Listen for changes in delp state to trigger fetching of favoriteProducts

  const navigation = useNavigation();

  const deleteProduct = async (id) => {
    try {
      await deleteDoc(doc(collection(FIREBASE_DB, 'AddToCart'), id));
      // Filter out the deleted product
      const updatedProducts = favoriteProducts.filter((product) => product.docid !== id);
      setFavoriteProducts(updatedProducts);
      
      // Recalculate the total price after removing the item
      let total = 0;
      updatedProducts.forEach((product) => {
        total += parseFloat(product.price);
      });
      setTotalPrice(total.toFixed(2));
      setCartItemCount(updatedProducts.length); // Update cart item count
    } catch (error) {
      console.error('Error deleting product: ', error);
    }
  };
  
  return (
    <View style={{ marginTop: 20 }}>
      <View style={{flexDirection:'row',alignItems:'center'}}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ width: 27, height: 27, backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: 23, marginRight: '2%', marginLeft: '2%', justifyContent: 'center', alignItems: 'center' }}>
        <Ionicons name="chevron-back" size={24} color="white" />
      </TouchableOpacity>
      <Text style={{color: 'rgba(0, 0, 0, 0.9)',marginRight: '2%', marginLeft: '2%', justifyContent: 'center', alignItems: 'center',fontSize:30,fontWeight:'bold',letterSpacing:3}}>Cart</Text>
      </View>
      {!delp && <FlatList
        data={favoriteProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{marginTop:hp('2%')}}>
            <View style={{ flexDirection: 'row', backgroundColor: 'white', margin: 16, borderRadius: 15, padding: 12, alignItems: 'center', marginTop: 10 }}>
              <Image source={{ uri: item.img4 }} style={{ width: 60, height: 62, borderRadius: 8 }} />
              <View style={{ marginHorizontal: 12 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20, textTransform: 'capitalize' }}>{item.title}</Text>
                <Text style={{ textTransform: 'capitalize', color: 'gray' }}>{item.description}</Text>
                <Text style={{ color: 'gray' }}>{item.price}</Text>
              </View>
              <TouchableOpacity style={{ marginHorizontal: 60 }} onPress={() => deleteProduct(item.docid)}>
                <AntDesign name="delete" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />}
      <Text style={{ fontSize: 25, color: 'black', fontWeight: 'bold', left: 12,marginTop:hp('2%') }}>Order info</Text>
      <View style={{ flexDirection: 'row', marginHorizontal: 12, top: 10, alignItems: 'center' }}>
        <Text style={{ fontSize: 15, color: 'gray' }}>Subtotal</Text>
        <Text style={{ fontSize: 22, color: 'black', left: 100 }}>${totalPrice}</Text>
      </View>
    </View>
  );
}

export default Cart;

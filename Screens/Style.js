// styles.js
import { StyleSheet } from 'react-native';

const commonStyles = StyleSheet.create({
  itemContainer: {
    margin: 9,
    // marginLeft: 18,
    // marginRight: 20,
    padding: 10,
    borderRadius: 8,
    borderWidth: 0,
    width: 160,
    backgroundColor: 'rgba(0, 128, 128, 0.1)',
  },
  Container:{
margin:0,
marginRight:0
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    // Add styles for description if needed
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  price: {
    // Add styles for price if needed
  },
  searchContainer: {
    margin: 9,
    flexDirection:'row',
    // marginLeft: 18,
    // marginRight: 20,
    padding: 10,
    borderRadius: 8,
    borderWidth: 0,
    width: 160,
    backgroundColor: 'rgba(0, 128, 128, 0.1)',
  }
});

export default commonStyles;

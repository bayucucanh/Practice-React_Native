import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import laptop from '../../assets/images/laptop.jpg'

const Product = (props) => {
  return (
    <View>
      <View style={styles.wrapper}>
        <Image source={laptop} style={styles.imageProduct}/>
        <Text style={styles.productTitle}>New Laptop 2019</Text>
        <Text style={styles.priceTitle}>Rp. 25.000.000,-</Text>
        <Text style={styles.location}>Jakarta Barat</Text>
        <TouchableOpacity onPress={props.onButtonPress}>
          <View style={styles.btnBeli}>
            <Text style={styles.textBtn}>BELI</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  wrapper: {
    width: 212, 
    padding: 12, 
    backgroundColor: '#F2F2F2', 
    borderRadius:8
  },
  imageProduct: {
    width: 188, 
    height: 125, 
    borderRadius: 8
  },
  productTitle: {
    fontSize: 14, fontWeight: 'bold', marginTop: 16
  },
  priceTitle: { 
    fontSize: 12, 
    fontWeight: 'bold',
    color: '#F2984A', 
    marginTop: 12 
  },
  location: { fontSize: 12, fontWeight: '300', marginTop: 12 },
  btnBeli: { 
    backgroundColor: '#6FCF97',
    paddingVertical: 6,
    borderRadius: 25,
    marginTop: 20
   },
   textBtn: { 
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center'
   }
});

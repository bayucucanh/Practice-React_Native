import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Cart from '../../component/Cart';
import Product from '../../component/Product';

const Communication = () => {
  const [totalProduct, setTotalProduct] = useState(0);
  return (
    <View>
      <Text>Communication antar Component</Text>
      <Cart quantity={totalProduct}/>
      <Product onButtonPress= { () => setTotalProduct(totalProduct + 1)}/>
    </View>
  );
}

export default Communication;
const styles = StyleSheet.create({});

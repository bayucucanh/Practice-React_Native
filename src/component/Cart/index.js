import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import cart from '../../assets/icons/cart.png';

const Cart = (props) => {
  return (
    <View>
      <View style={styles.cartWrapper}>
        <Image source={cart} style={styles.iconCart}/>
        <Text style={styles.notif}>{props.quantity}</Text>
      </View>
      <Text style={styles.tulisan}>Keranjang Belanja</Text>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  cartWrapper: {
    borderWidth: 1,
    borderColor: '#4938DI',
    width: 93,
    height: 93,
    borderRadius: 93 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginTop: 30
  },
  iconCart: {width: 100, height: 100},
  tulisan: {
    fontSize: 12,
    color: '#777777',
    fontWeight: '700',
    marginTop: 10
  },
  notif: {
    fontSize: 12,
    color: 'white',
    backgroundColor: '#6fcf97',
    borderRadius: 12,
    padding: 4,
    width: 24,
    height: 24,
    position: 'absolute',
    top: 0,
    right: 0
  }
});

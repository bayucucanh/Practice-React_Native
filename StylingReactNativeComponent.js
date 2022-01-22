import React, { Component } from 'react';
import {Text, View, Image, TextInput, StyleSheet, ScrollView} from 'react-native';
import laptop from './laptop.jpg';

const StylingReactNativeComponent = () => {
  return (
    <View>
      <Text style={styles.text}>Styling Component</Text>
      <View 
      style={{ 
        width: 100,
        height: 100,
        backgroundColor: 'lightblue',
        borderWidth: 2,
        borderColor: '#5f27cd',
        marginTop: 20,
        marginLeft: 20
       }}
      >
      </View>
      <View style={{ width: 212, padding: 12, backgroundColor: '#F2F2F2', borderRadius:8 }}>
        <Image source={laptop} style={{width: 188, height: 125, borderRadius: 8}}/>
        <Text style={{ fontSize: 14, fontWeight: 'bold', marginTop: 16 }}>New Laptop 2019</Text>
        <Text style={{ 
          fontSize: 12, 
          fontWeight: 'bold',
          color: '#F2984A', 
          marginTop: 12 
          }}>
          Rp. 25.000.000,-
        </Text>
        <Text style={{ fontSize: 12, fontWeight: '300', marginTop: 12 }}>Jakarta Barat</Text>
        <View style={{ 
          backgroundColor: '#6FCF97',
          paddingVertical: 6,
          borderRadius: 25,
          marginTop: 20
         }}>
          <Text style={{ 
            fontSize: 14,
            fontWeight: '600',
            color: 'white',
            textAlign: 'center'
           }}>
           BELI
        </Text>
        </View>
      </View>
    </View>
  )
}

// Membuat style sheet
const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    marginLeft: 20,
    marginTop: 40
  }
})

export default StylingReactNativeComponent;
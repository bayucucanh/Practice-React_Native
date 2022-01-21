import React, { Component } from 'react';
import {Text, View, Image, TextInput, StyleSheet} from 'react-native';
import laptop from './laptop.jpg';

const App = () => {
  return (
    <StylingReactNativeComponent />
  );
};

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

const SampleComponent = () => {
  return (
    <View>
      <Text>Hello World!</Text>
      <Bayuc />
      <View style={{width: 80, height: 80, backgroundColor: '#9b59b6'}} />
      <Photo />
      <TextInput style={{borderWidth: 1}} />
      <BoxGreen />
      <Profile />
    </View>
  );
}

const Bayuc = () => {
  return <Text>Bayuc</Text>;
};

const Photo = () => {
  return <Image source={{uri: 'https://imagesource.io/wp-content/uploads/2021/12/Akita-Japanese-Bed-768x512.jpg'}} style={{width:100, height: 100 }}/>;
};

class BoxGreen extends Component {
  render() {
    return <Text>Ini adalah Class Component</Text>;
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{uri: 'https://static.highsnobiety.com/thumbor/z5xdH576-IFxZcL3_40lVsvwZpo=/1200x720/static.highsnobiety.com/wp-content/uploads/2020/08/31105747/neymar-nike-deal-part-ways-00.jpg' }} 
          style={{width:100, height: 100, borderRadius: 50, margin: 15}} 
        />
        <Text style={{ color: 'blue',  fontSize: 24}}>Ini Neymar</Text>
      </View>
    );
  }
}
export default App;

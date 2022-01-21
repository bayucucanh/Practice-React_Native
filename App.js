import React, { Component } from 'react';
import {Text, View, Image, TextInput} from 'react-native';

const App = () => {
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
};

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

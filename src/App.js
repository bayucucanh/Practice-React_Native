import React, { Component } from 'react';
import {Text, View, Image, TextInput, StyleSheet, ScrollView} from 'react-native';
import FlexBox from './pages/FlexBox';
import Position from './pages/Position';
import StylingComponent from './pages/StylingComponent';
import SampleComponent from './pages/SampleComponent';

const App = () => {
  return (
    <View>
      <ScrollView>
        <SampleComponent />
        <StylingComponent />
        <FlexBox />
        <Position />
      </ScrollView>
    </View>
  );
};
export default App;

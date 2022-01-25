import React, { Component, useState, useEffect } from 'react';
import {Text, View, Image, TextInput, StyleSheet, ScrollView} from 'react-native';
import FlexBox from './pages/FlexBox';
import Position from './pages/Position';
import StylingComponent from './pages/StylingComponent';
import SampleComponent from './pages/SampleComponent';
import PropsDinamis from './pages/PropsDinamis';
import StateDinamis from './pages/StateDinamis';

const App = () => {
  const [isShow, SetIsShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      SetIsShow(false);
    }, 6000);
  });
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent />
        <StylingComponent /> */}
        {/* {isShow && <FlexBox />} */}
        {/* <Position /> */}
        {/* <PropsDinamis /> */}
        <StateDinamis />
      </ScrollView>
    </View>
  );
};
export default App;

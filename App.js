import React, { Component } from 'react';
import {Text, View, Image, TextInput, StyleSheet, ScrollView} from 'react-native';
import MateriFlexBox from './MateriFlexBox';
import PositionReactNative from './PositionReactNative';
import SampleComponent from './SampleComponent';
import StylingReactNativeComponent from './StylingReactNativeComponent';

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent />
        <StylingReactNativeComponent />
        <MateriFlexBox /> */}
        <PositionReactNative />
      </ScrollView>
    </View>
  );
};
export default App;

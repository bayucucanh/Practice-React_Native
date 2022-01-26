import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import MySvg from '../../assets/images/ilustrationMyApp.svg';

const ReactNativeSvg = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>
        Menggunakan File SVG didalam React Native
      </Text>
      <MySvg width={244} height={125} />
    </View>
  );
};

export default ReactNativeSvg;

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center'},
});

import { Button, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import React from 'react';

const Item = () => {
  return (
    <View style={styles.itemContainer}>
        <Image source={{ uri: 'https://source.unsplash.com/100x100?Profile' }} style={styles.avatar}/>
        <View style={styles.desc}>
          <Text style={styles.descName}>Nama Lengkap</Text>
          <Text style={styles.descEmail}>Email</Text>
          <Text style={styles.descBidang}>Bidang</Text>
        </View>
        <Text style={styles.delete}>X</Text>
      </View>
  )
}

const LocalAPI = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Local API dengan json server</Text>
      <TextInput placeholder='Nama Lengkap' style={styles.input}/>
      <TextInput placeholder='Email' style={styles.input}/>
      <TextInput placeholder='Bidang' style={styles.input}/>
      <Button title='Simpan'/>
      <View style={styles.line} />
      <Item />
      <Item />
      <Item />
    </View>
  );
};

export default LocalAPI;

const styles = StyleSheet.create({
  container: {padding:20},
  textTitle: {textAlign: 'center', marginBottom: 20},
  line: {height:2, backgroundColor: 'black', marginVertical: 20},
  input: {borderWidth: 1, marginBottom: 12, borderRadius: 25, paddingHorizontal: 18 },
  avatar: {width: 80, height: 80, borderRadius: 50},
  itemContainer: {flexDirection: 'row', marginBottom: 20},
  desc: {marginLeft: 18, flex: 1},
  descName: {fontSize: 20, fontWeight: 'bold'},
  descEmail: {fontSize: 16},
  descBidang: {fontSize: 12, marginTop: 8},
  delete: {fontSize: 20, fontWeight: 'bold', color: 'red'}
});

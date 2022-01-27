import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';

const CallAPIVanilla = () => {
  // Call API methods GET
  // useEffect(() => {
  //   fetch('https://reqres.in/api/users/2')
  //   .then(response => response.json())
  //   .then(json => console.log(json))
  // }, [])

  // Call API methos POST
  const dataForAPI = {
    name: "morpheus",
    job: "leader"
  }
  
  console.log('data object: ', dataForAPI);
  console.log('data stringify: ', JSON.stringify(dataForAPI));

  fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataForAPI)
  })
  .then(response => response.json())
  .then(json => console.log('post respons: ', json))

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Call API dengan Vanilla.js</Text>
    </View>
  );
};

export default CallAPIVanilla;

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center'}
});

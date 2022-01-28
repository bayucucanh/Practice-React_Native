import { Button, StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';

const CallAPIVanilla = () => {
  const [dataUser, setDataUser] = useState({
    avatar: '',
    email: '',
    first_name: '',
    last_name: '',
  })

  const [dataJob, setDataJob] = useState({
    name: '',
    job: '',
  })

  // Call API methods GET
  useEffect(() => {
  //   fetch('https://reqres.in/api/users/2')
  //   .then(response => response.json())
  //   .then(json => console.log(json))

  // Call API methos POST
  // const dataForAPI = {
  //   name: "morpheus",
  //   job: "leader"
  // }

  // console.log('data object: ', dataForAPI);
  // console.log('data stringify: ', JSON.stringify(dataForAPI));

  // fetch('https://reqres.in/api/users', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(dataForAPI)
  // })
  // .then(response => response.json())
  // .then(json => console.log('post respons: ', json))
  }, []);

  const getData = () => {
    fetch('https://reqres.in/api/users/2')
    .then(response => response.json())
    .then(json => {
      console.log(json)
      setDataUser(json.data)
    })
  }

  const postData = () => {
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
    .then(json => {
      console.log('post respons: ', json)
      setDataJob(json)
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Call API dengan Vanilla.js</Text>
      <Button title='GET DATA' onPress={getData}/>
      <Text>Response GET DATA</Text>
      {dataUser.avatar.length > 0 && (
        <Image source={{ uri: dataUser.avatar }} style={styles.image} />
      )}
      <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
      <Text>{dataUser.email}</Text>

      <View style={styles.line}></View>
      <Button title='POST DATA' onPress={postData}/>
      <Text>Response POST DATA</Text>
      <Text>{dataJob.name}</Text>
      <Text>{dataJob.job}</Text>
    </View>
  );
};

export default CallAPIVanilla;

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center'},
  line: {height: 2, backgroundColor: 'black', marginVertical: 20},
  image: {width: 100, height: 100, borderRadius: 100 / 2}
});

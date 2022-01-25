import { Button, StyleSheet, Text, View } from 'react-native';
import React, { Component, useState } from 'react';

const Counter = () => {
  const [number, setNumber] = useState(0);
  return (
    <View>
      <Text>{number}</Text>
      <Button title='Tambah' onPress={() => setNumber(number + 1)}/>
      <Button title='Kurang' onPress={() => setNumber(number - 1)} style={styles.btn}/>
    </View>
  );
}
class CounterClass extends Component {
  state = {
    number: 0,
  };
  render() {
    return (
      <View>
        <Text>{this.state.number}</Text>
        <Button title='Tambah' onPress={() => this.setState({number:this.state.number + 1}) }/>
        <Button title='Kurang' onPress={() => this.setState({number:this.state.number - 1}) }/>
      </View>
    );
  }
}

const StateDinamis = () => {
  return (
    <View style={styles.wrapper}>
      <Text>Component Dinamis dengan State</Text>
      <Text style={styles.titleSection}>Functional Component (Hooks)</Text>
      <Counter />
      <Text style={styles.titleSection}>Class Component</Text>
      <CounterClass />
    </View>
  );
}
export default StateDinamis;
const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
  text: {
    textAlign: 'center'
  },
  btn: {
    marginTop : 20
  },
  titleSection: {
    marginTop: 20,
  }
});

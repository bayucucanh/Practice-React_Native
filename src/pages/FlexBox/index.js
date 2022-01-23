import React, { Component } from "react";
import {Text, View, Image} from 'react-native';

class FlexBox extends Component {
  constructor(props) {
    super(props);
    console.log('===> constructor');
    this.state = {
      subscriber: 200,
    }
  }

  componentDidMount() {
    console.log('===> Component did mount');
    // Membuat perubahan pd component
    setTimeout(() => {
      this.setState({
        subscriber: 500,
      });
    }, 2000);
  }

  componentDidUpdate() {
    console.log('===> Component did Update');
  }

  componentWillUnmount() {
    console.log('===> Component will Unmount');
  }

  render() {
    console.log('===> render');
    return (
      <View>
        <View style={{ 
          flexDirection: 'row', 
          backgroundColor: 'grey', 
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <View style={{ backgroundColor: '#EE5353', width: 50, height: 50}}></View>
          <View style={{ backgroundColor: '#feca57', width: 50, height: 50}}></View>
          <View style={{ backgroundColor: '#1dd1a1', width: 50, height: 50}}></View>
          <View style={{ backgroundColor: '#5f27cd', width: 50, height: 50}}></View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Text>Beranda</Text>
          <Text>Video</Text>
          <Text>Komunitas</Text>
          <Text>Playlist</Text>
          <Text>Channel</Text>
        </View>
        <View 
          style={{ 
            flexDirection: 'row',
            marginTop: 20,
            alignItems: "center"
           }}
        >
          <Image 
            source={{ uri: 'https://yt3.ggpht.com/ytc/AKedOLRexzNqKp2lRPNUmvq0_xOUu8oxf-z5LjSxi2lOPlc=s88-c-k-c0x00ffffff-no-rj' }} 
            style={{ width:100, height: 100, borderRadius: 50, marginRight: 12 }}
          />
          <View>
            <Text
              style={{ fontSize: 20, fontWeight: 'bold' }}
            >Prawiro Hudoro</Text>
            <Text>{this.state.subscriber} Subscriber</Text>
          </View>
        </View>
      </View>

      );
  }
}

export default FlexBox;
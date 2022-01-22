import React, { Component } from "react";
import {Text, View, Image} from 'react-native';

class MateriFlexBox extends Component {
  render() {
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
            <Text>105 Subscribers</Text>
          </View>
        </View>
      </View>

      );
  }
}

export default MateriFlexBox;
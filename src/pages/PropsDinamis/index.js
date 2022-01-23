import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Story = props => {
  return (
    <View style={{ alignItems: 'center', marginRight: 20 }}>
      <Image 
        source={{ uri: props.gambar }}
        style={{ width:70, height: 70, borderRadius: 70 / 2 }}
      />
      <Text style={{ textAlign: 'center', maxWidth: 70 }}>{props.judul}</Text>
    </View>
  );
}


const PropsDinamis = () => {
  return (
    <View>
      <Text>Materi Props Dinamis</Text>
      <ScrollView horizontal>
        <View style={{ flexDirection: 'row' }}>
          <Story 
            judul="Photography" 
            gambar="https://scontent-sin6-3.cdninstagram.com/v/t51.12442-15/e35/c0.540.1080.1080a/s150x150/50110001_400253970741130_4547965441478532371_n.jpg?_nc_ht=scontent-sin6-3.cdninstagram.com&_nc_cat=110&_nc_ohc=cjyFI1czcyAAX8bHd-q&edm=ALbqBD0BAAAA&ccb=7-4&oh=00_AT9O-ZoXPQ35XO4ckxQ14ELxe2W6ikuIHfnOjUrj1wg4IQ&oe=61EFB544&_nc_sid=9a90d6"/>
          <Story 
            judul="Coding" 
            gambar="https://scontent-sin6-1.cdninstagram.com/v/t51.12442-15/e35/c0.540.1080.1080a/s150x150/71843936_135210317810455_8073246538361049124_n.jpg?_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_cat=107&_nc_ohc=LrVPJGYb7FAAX_zjFLm&tn=usqyZ21kmH-urXFc&edm=ALbqBD0BAAAA&ccb=7-4&oh=00_AT8oZvUU2oM59rYJUPy5gpPb7CyfeLb4UT6qgLM8E96Mbg&oe=61F01177&_nc_sid=9a90d6"/>
          <Story 
            judul="CSH" 
            gambar="https://scontent-sin6-1.cdninstagram.com/v/t51.12442-15/e35/c0.496.1080.1080a/s150x150/43112200_263811360969743_3081626792141030228_n.jpg?_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_cat=111&_nc_ohc=pFCLv57SBjsAX8cOHs2&edm=ALbqBD0BAAAA&ccb=7-4&oh=00_AT9AAo9VMlcwjVcI4sGSmnc2O-QtbrjnHzxV77yVsUCt0A&oe=61EF8EB2&_nc_sid=9a90d6"/>
          <Story 
            judul="Jogjakarte" 
            gambar="https://scontent-sin6-3.cdninstagram.com/v/t51.12442-15/e35/c0.360.720.720a/s150x150/27581176_966954413454318_4271911868605399040_n.jpg?_nc_ht=scontent-sin6-3.cdninstagram.com&_nc_cat=106&_nc_ohc=jEOI6LDbLqYAX9eQsLm&edm=ALbqBD0BAAAA&ccb=7-4&oh=00_AT9beq1m1RmBvm0q5vrNm0IwAwJRe05LRmaJvO1ClklyPg&oe=61F021F5&_nc_sid=9a90d6"/>
          <Story 
            judul="Photography" 
            gambar="https://scontent-sin6-3.cdninstagram.com/v/t51.12442-15/e35/c0.540.1080.1080a/s150x150/50110001_400253970741130_4547965441478532371_n.jpg?_nc_ht=scontent-sin6-3.cdninstagram.com&_nc_cat=110&_nc_ohc=cjyFI1czcyAAX8bHd-q&edm=ALbqBD0BAAAA&ccb=7-4&oh=00_AT9O-ZoXPQ35XO4ckxQ14ELxe2W6ikuIHfnOjUrj1wg4IQ&oe=61EFB544&_nc_sid=9a90d6"/>
          <Story 
            judul="Photography" 
            gambar="https://scontent-sin6-3.cdninstagram.com/v/t51.12442-15/e35/c0.540.1080.1080a/s150x150/50110001_400253970741130_4547965441478532371_n.jpg?_nc_ht=scontent-sin6-3.cdninstagram.com&_nc_cat=110&_nc_ohc=cjyFI1czcyAAX8bHd-q&edm=ALbqBD0BAAAA&ccb=7-4&oh=00_AT9O-ZoXPQ35XO4ckxQ14ELxe2W6ikuIHfnOjUrj1wg4IQ&oe=61EFB544&_nc_sid=9a90d6"/>
          <Story 
            judul="Photography" 
            gambar="https://scontent-sin6-3.cdninstagram.com/v/t51.12442-15/e35/c0.540.1080.1080a/s150x150/50110001_400253970741130_4547965441478532371_n.jpg?_nc_ht=scontent-sin6-3.cdninstagram.com&_nc_cat=110&_nc_ohc=cjyFI1czcyAAX8bHd-q&edm=ALbqBD0BAAAA&ccb=7-4&oh=00_AT9O-ZoXPQ35XO4ckxQ14ELxe2W6ikuIHfnOjUrj1wg4IQ&oe=61EFB544&_nc_sid=9a90d6"/>
        </View>
      </ScrollView>
    </View>
  );
}
export default PropsDinamis;
const styles = StyleSheet.create({});

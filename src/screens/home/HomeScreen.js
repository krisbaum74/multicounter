import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import backgrounGradient from '../../../assets/background-gradient.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sample: {
    color: "white",
    fontFamily: "SourceSansPro"
  }
});

export default function HomeScreen() {
  return (
    <ImageBackground source={backgrounGradient} resizeMode="stretch" style={styles.container}>
      <Text style={styles.sample}>Open up src/home/HomeScreen.js to start working on your app!</Text>
    </ImageBackground>
  );
}
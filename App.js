import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import StackNavigator from './src/screens/StackNavigator';
import { createStore } from 'redux';
import reducer from './src/store/reducer';
import { Provider } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const store = createStore(reducer);

export default function App() {
  const [loaded] = useFonts({
    SourceSansPro: require('./assets/font/SourceSansPro-Regular.ttf'),
  });
  
  if (!loaded) {
    return null;
  }

  return (
    <Provider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
}

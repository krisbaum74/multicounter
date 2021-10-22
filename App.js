import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import StackNavigator from './src/screens/StackNavigator';
import { Provider } from 'react-redux';
import store from './src/store/store';
import AlertDialog from './src/components/AlertDialog';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  const [loaded] = useFonts({
    SourceSansPro: require('./assets/font/SourceSansPro-Regular.ttf'),
  });
  
  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
      <AlertDialog />
    </Provider>
  );
}

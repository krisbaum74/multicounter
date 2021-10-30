import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import StackNavigator from './src/screens/StackNavigator';
import store from './src/store/store';
import AlertDialog from './src/components/AlertDialog';

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

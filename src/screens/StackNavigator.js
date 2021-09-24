import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './home/HomeScreen';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "#2B5B61",
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
      },
      headerTintColor: "white",
      headerShadowVisible: true,
      headerTitleStyle: {
        fontFamily: "SourceSansPro"
      }
    }} >
      <Stack.Screen name="Counters" component={HomeScreen} />
    </Stack.Navigator>
  );
}
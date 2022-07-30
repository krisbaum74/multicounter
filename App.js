import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import StackNavigator from "./src/screens/StackNavigator";
import store from "./src/store/store";
import AlertDialog from "./src/components/AlertDialog";

export default function App() {
  const [loaded] = useFonts({
    SourceSansPro: require("./assets/font/SourceSansPro-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
        <AlertDialog />
      </SafeAreaProvider>
    </Provider>
  );
}

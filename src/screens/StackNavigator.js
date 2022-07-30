import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen, { homeScreenOptions } from "./home/HomeScreen";
import SettingsScreen, {
  settingsScreenOptions,
} from "./settings/SettingsScreen";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#2B5B61",
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        headerTintColor: "white",
        headerShadowVisible: true,
        headerTitleStyle: {
          fontFamily: "SourceSansPro",
          fontSize: 24,
        },
      }}
    >
      <Stack.Screen
        name="Counters"
        component={HomeScreen}
        options={homeScreenOptions}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={settingsScreenOptions}
      />
    </Stack.Navigator>
  );
}

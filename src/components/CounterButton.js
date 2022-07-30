import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    margin: 8,
  },
});

export default function CounterButton({
  icon,
  size,
  color,
  style,
  onPress,
  visible
}) {
  return (
    <TouchableOpacity
      disabled={!visible}
      style={[
        styles.button,
        visible ? { backgroundColor: color } : {},
        style,
      ]}
      onPress={onPress}
    >
      <FontAwesome5
        name={icon}
        size={size}
        color={visible? "black" : "transparent"}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
}

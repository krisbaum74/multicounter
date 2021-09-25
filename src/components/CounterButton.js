import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    margin: 8
  }
});

export default function CounterButton({ icon, size, color, style}) {
  return (
    <TouchableOpacity style={[styles.button, {backgroundColor: color}, style]}>
      <FontAwesome5 name={icon} size={size} color="black" style={styles.icon} />
    </TouchableOpacity>
  );
}
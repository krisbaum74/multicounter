import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    margin: 8,
  },
});

export default function HeaderButton({ icon, style, onPress }) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <FontAwesome5 name={icon} size={24} color="white" style={styles.icon} />
    </TouchableOpacity>
  );
}

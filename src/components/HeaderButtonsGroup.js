import React from 'react';
import { StyleSheet, View } from 'react-native';
import HeaderButton from './HeaderButton';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginRight: 16,
  },
});

export default function HeaderButtonGroup({ buttons }) {
  return (
    <View style={styles.container}>
      {buttons.map(({ icon, onPress }) => (
        <HeaderButton icon={icon} onPress={onPress} />
      ))}
    </View>
  );
}

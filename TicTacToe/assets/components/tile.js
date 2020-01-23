import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Tile() {
  return (
    <View style={styles.tileBody} />
  );
}

const styles = StyleSheet.create({
  tileBody: {
    backgroundColor: '#FE4A49',
    borderWidth: 1,
    borderColor: '#FED766',
    width: 100,
    height: 100,
  }
});

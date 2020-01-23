import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Board from './assets/components/board';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LEGALICEN LA MOTA PUTOS!!</Text>
      <Board />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FED766',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2AB7CA',
  },
});

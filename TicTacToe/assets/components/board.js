import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tile from './tile';

export default class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>LEGALICEN LA MOTA PUTOS!!</Text>
        <View style={{ flexDirection: 'row' }}>
          <Tile />
          <Tile />
          <Tile />
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Tile />
          <Tile />
          <Tile />
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Tile />
          <Tile />
          <Tile />
        </View>
        {/* <Text>Iconos diseñados por </Text>
        <Text
          style={{ color: '#FE4A49' }}
          onPress={() => Linking.openURL('https://www.flaticon.es/autores/darius-dan')}
        >
        Darius Dan
        </Text>
        <Text>
         from
        </Text>
        <Text
          style={{ color: '#FE4A49' }}
          onPress={() => Linking.openURL('https://www.flaticon.es/')}
        >
         www.flaticon.es
        </Text> */}
      </View>
    );
  }
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

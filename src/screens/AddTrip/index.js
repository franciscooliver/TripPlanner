import React, { Component } from 'react';

import { View, Text } from 'react-native';

// import styles from './styles';

export default class AddTrip extends Component {

    static navigationOptions = {
        header: null
    }
  render() {
    return (
        <View>
            <Text>Tela de adicionar Trip</Text>
        </View>
    );
  }
}

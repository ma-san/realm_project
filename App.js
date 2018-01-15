/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from 'react-native';
import * as preference from './Preference';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  
  constructor(props) {
    super(props);
    this.state = { id: 0, title: '' };
  }
  
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{height: 40}}
          placeholder="id: Int"
          onChangeText={(text) => this.state.id = Number(text)}
        />
        <TextInput
          style={{height: 40}}
          placeholder="title: String"
          onChangeText={(text) => this.state.title = text}
        />
        <Button
        onPress={() => preference.write(this.state.id, this.state.title)}
        title="書き込み"
        />
        <Button
        onPress={() => alert(preference.read(this.state.id))}
        title="読み込み"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

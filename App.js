import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Home from './src/Home';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <View style={styles.app}>
      <Home />
    </View>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: 'white',
  },
});

import 'react-native-gesture-handler';
import React from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import Categories from './src/Categories';
import HeaderPic from './src/HeaderPic';
import HomeHeader from './src/HomeHeader';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider style={{backgroundColor: '#eee'}}>
      <ScrollView>
        <StatusBar backgroundColor="#eee" />
        <HomeHeader />
        <HeaderPic />
        <Categories />
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: 'white',
  },
});

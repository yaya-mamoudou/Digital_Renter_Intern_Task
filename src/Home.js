import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import Categories from './Categories';
import HeaderPic from './HeaderPic';
import HomeHeader from './HomeHeader';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function Home() {
  return (
    <SafeAreaProvider style={{backgroundColor: '#eee'}}>
      <StatusBar backgroundColor="#eee" barStyle="dark-content" />
      <HomeHeader />
      <HeaderPic />
      <Categories />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});

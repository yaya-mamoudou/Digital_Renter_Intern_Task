import React from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import Categories from './Categories';
import HeaderPic from './HeaderPic';
import HomeHeader from './HomeHeader';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Suggestions from './Suggestions';
import {NavigationContainer} from '@react-navigation/native';

export default function Home() {
  return (
    <SafeAreaProvider style={{backgroundColor: '#eee'}}>
      <ScrollView>
        <StatusBar backgroundColor="#eee" barStyle="dark-content" />
        <HomeHeader />
        <HeaderPic />
        <Categories />
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});

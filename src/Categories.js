import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import All from './All';
import Recommended from './Recommeded';

import {NavigationContainer} from '@react-navigation/native';
const {width, height} = new Dimensions.get('screen');
const Tab = createMaterialTopTabNavigator();

export default function Categories() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        swipeEnabled={false}
        tabBarOptions={{
          style: styles.tabstyle,
          labelStyle: styles.labelStyle,
          indicatorStyle: styles.indicatorStyle,
          tabStyle: styles.tabStyle,
        }}
        initialRouteName="Home">
        <Tab.Screen name="All" component={All} />
        <Tab.Screen name="Recommended" component={Recommended} />
        <Tab.Screen name="Popular Books" component={Recommended} />
        <Tab.Screen name="My Books" component={Recommended} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  categories: {
    backgroundColor: '#eee',
  },
  tabStyle: {
    borderTopColor: 'red',
    borderTopWidth: 0,
    paddingRight: '3%',
    paddingLeft: 0,
    width: 'auto',
  },
  indicatorStyle: {
    width: '2%',
    backgroundColor: 'black',
    height: 4,
    marginLeft: '3%',
  },
  labelStyle: {
    textTransform: 'capitalize',
    fontSize: 11,
    fontWeight: 'bold',
  },
  tabstyle: {
    backgroundColor: '#eee',
    borderTopWidth: 0,
    elevation: 0,
  },
});

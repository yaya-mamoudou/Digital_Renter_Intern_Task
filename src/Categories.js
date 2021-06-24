import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import All from './All';
import Recommeded from './Recommeded';
import {NavigationContainer} from '@react-navigation/native';
const {width, height} = new Dimensions.get('screen');

const Tab = createMaterialTopTabNavigator();
export default function Categories() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        style={{
          paddingLeft: 10,
        }}
        swipeEnabled={false}
        tabBarOptions={{
          style: {
            backgroundColor: '#eee',
            borderTopWidth: 0,
            elevation: 0,
          },
          labelStyle: {
            textTransform: 'capitalize',
            fontSize: 11,
            fontWeight: 'bold',
          },
          indicatorStyle: {
            width: '5%',
            backgroundColor: 'black',
            height: 4,
            marginLeft: '3%',
          },
          tabStyle: {
            borderTopColor: 'red',
            borderTopWidth: 0,
            width: 'auto',
          },
        }}
        initialRouteName="Home">
        <Tab.Screen name="All" component={All} />
        <Tab.Screen name="Recommended" component={All} />
        <Tab.Screen name="Popular Books" component={All} />
        <Tab.Screen name="My Books" component={All} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  categories: {
    backgroundColor: '#eee',
  },
});

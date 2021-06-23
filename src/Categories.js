import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import All from './All';
import Recommeded from './Recommeded';
import {NavigationContainer} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Tab = createMaterialTopTabNavigator();
export default function Categories() {
  const inset = useSafeAreaInsets();
  return (
    <NavigationContainer>
      <Tab.Navigator
        swipeEnabled={false}
        tabBarOptions={{
          style: {
            // marginTop: inset.top,
            backgroundColor: '#eee',
            borderColor: 'red',
            borderTopWidth: 0,
            elevation: 0,
          },
          labelStyle: {
            textTransform: 'capitalize',
            fontSize: 11,
            fontWeight: 'bold',
            // textAlign: 'left',
          },
          indicatorStyle: {
            width: '3%',
            backgroundColor: 'black',
            marginHorizontal: Dimensions.get('screen').width / 9,
            height: 4,
          },
          tabStyle: {
            borderTopColor: 'red',
            borderTopWidth: 0,
          },
        }}
        initialRouteName="Home">
        <Tab.Screen name="All" component={All} />
        <Tab.Screen name="Recommended" component={Recommeded} />
        <Tab.Screen name="Popular Books" component={All} />
        <Tab.Screen name="My Books" component={Recommeded} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  categories: {
    backgroundColor: '#eee',
  },
});

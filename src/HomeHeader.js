import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

export default function HomeHeader() {
  return (
    <View style={styles.header}>
      <Text style={[styles.headerFont, {fontSize: 20}]}>Hi John,</Text>
      <Icon
        style={[styles.headerFont, {fontSize: 20, marginLeft: 'auto'}]}
        name="search"
        color="black"
      />
      <Icon
        style={[styles.headerFont, {fontSize: 20}]}
        name="bell"
        color="black"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headerFont: {
    fontWeight: 'bold',
    marginHorizontal: 8,
  },

  header: {
    flexDirection: 'row',
    padding: '2%',
    alignItems: 'center',
  },
});

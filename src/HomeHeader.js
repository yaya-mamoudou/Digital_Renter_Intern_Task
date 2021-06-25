import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

export default function HomeHeader() {
  return (
    <View style={styles.header}>
      <Text style={[styles.headerFont, {fontSize: 18}]}>Hi John,</Text>
      <Icon
        style={[styles.headerFont, {fontSize: 17, marginLeft: 'auto'}]}
        name="search"
        color="black"
      />
      <Icon
        style={[styles.headerFont, {fontSize: 17}]}
        name="bell"
        color="black"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headerFont: {
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginVertical: Dimensions.get('screen').height * 0.03,
  },

  header: {
    flexDirection: 'row',
    padding: '2%',
    alignItems: 'center',
  },
});

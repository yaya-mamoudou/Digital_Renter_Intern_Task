import React from 'react';
import {StyleSheet, Dimensions, Image, Text, View} from 'react-native';

const {width, height} = new Dimensions.get('screen');

export default function HeaderPic() {
  return (
    <View style={styles.headerPic}>
      <View style={styles.doted} />

      <View style={styles.TextView}>
        <Text style={styles.picText}>Your</Text>
        <Text style={styles.picText}>Bookshelf</Text>
      </View>

      <Image style={styles.image} source={require('./assets/57.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerPic: {
    position: 'relative',
    paddingHorizontal: '2.5%',
    // backgroundColor: 'yellow',
    height:
      height < 600
        ? height > width
          ? height * 0.17
          : height * 0.3
        : height * 0.15,
    justifyContent: 'center',
  },
  doted: {
    width:
      height < 600
        ? height > width
          ? height * 0.17
          : height * 0.3
        : height * 0.15,
    height:
      height < 600
        ? height > width
          ? height * 0.17
          : height * 0.3
        : height * 0.15,
    borderRadius: 75,
    borderColor: 'black',
    borderWidth: 2,
    borderStyle: 'dotted',
    position: 'absolute',
    right: '8%',
  },
  image: {
    width:
      height < 600
        ? height > width
          ? height * 0.17 - 5
          : height * 0.3 - 5
        : height * 0.14,
    height:
      height < 600
        ? height > width
          ? height * 0.17 - 5
          : height * 0.3 - 5
        : height * 0.14,
    position: 'absolute',
    right: '9%',
    top: 6,
    zIndex: 3,
  },
  TextView: {
    width: '100%',
    padding: 8,
    backgroundColor: '#036685',
    height: '80%',
    position: 'relative',
    zIndex: 1,
    borderRadius: 10,
    paddingHorizontal: '5%',
    paddingTop: '2%',
  },
  picText: {
    color: '#c2f0f0',
    fontWeight: '700',
    fontSize: 17,
  },
});

import React from 'react';
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const {width, height} = new Dimensions.get('screen');

export default function AllFlatlistComp1({item, index}) {
  return (
    <View key={index} style={styles.conatiner}>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={item.img} />
      </View>
      <View style={styles.contentContainer}>
        <Text numberOfLines={1} style={styles.title}>
          {item.title}
        </Text>
        <Text style={styles.des}>{item.des}</Text>
        <View style={styles.lastRow}>
          <View style={{flexDirection: 'row'}}>
            <Icon name="star" size={15} color="orange" />
            <Icon name="star" size={15} color="orange" />
            <Icon name="star" size={15} color="orange" />
            <Icon name="star" size={15} color="orange" />
            <Icon name="star" size={15} color="orange" />
          </View>
          <Text style={styles.cat}>{item.cat}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    width: width > 500 ? width * 0.48 : width * 0.62,
    height: '70%',
    backgroundColor: 'white',
    flexDirection: 'row',
    marginRight: width * 0.05,
    marginLeft: 10,
    borderRadius: 7,
    justifyContent: 'space-around',
    alignSelf: 'flex-end',
  },
  imgContainer: {
    width: '40%',
    height: '120%',
    backgroundColor: '#036685',
    borderRadius: 7,
    position: 'relative',
    top:
      height > width
        ? height < 700
          ? -height * 0.25 * 0.22
          : -height * 0.2 * 0.22
        : -width * 0.3 * 0.22,
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 7,
    resizeMode: 'cover',
  },
  contentContainer: {
    width: '55%',
    height: '100%',
    borderRadius: 7,
    paddingVertical: 5,
  },
  cat: {
    fontWeight: '600',
    fontSize: 12,
    color: 'green',
    marginLeft: 'auto',
  },
  lastRow: {flexDirection: 'row', marginTop: 'auto'},
  des: {
    fontWeight: '500',
    fontSize: 12,
    color: '#8c8c8c',
  },
  title: {fontWeight: 'bold', fontSize: 14},
});

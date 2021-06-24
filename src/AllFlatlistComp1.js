import React from 'react';
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const {width, height} = new Dimensions.get('screen');

export default function AllFlatlistComp1({item, index}) {
  return (
    <View
      key={index}
      style={{
        width: width > 500 ? width * 0.5 : width * 0.8,
        height: '70%',
        backgroundColor: 'white',
        flexDirection: 'row',
        marginRight: width * 0.05,
        borderRadius: 7,
        justifyContent: 'space-around',
        alignSelf: 'flex-end',
      }}>
      <View
        style={{
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
        }}>
        <Image
          style={{width: '100%', height: '100%', borderRadius: 7}}
          source={item.img}
        />
      </View>
      <View
        style={{
          width: '50%',
          height: '100%',
          borderRadius: 7,
          paddingVertical: 10,
        }}>
        <Text numberOfLines={1} style={{fontWeight: 'bold', fontSize: 12}}>
          {item.title}
        </Text>
        <Text
          style={{
            fontWeight: '500',
            fontSize: 10.5,
            color: '#8c8c8c',
          }}>
          {item.des}
        </Text>
        <View style={{flexDirection: 'row', marginTop: 'auto'}}>
          <View style={{flexDirection: 'row'}}>
            <Icon name="star" size={14} color="orange" />
            <Icon name="star" size={14} color="orange" />
            <Icon name="star" size={14} color="orange" />
            <Icon name="star" size={14} color="orange" />
            <Icon name="star" size={14} color="orange" />
          </View>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 10.5,
              color: 'green',
              marginLeft: 'auto',
            }}>
            {item.cat}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

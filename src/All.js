import React from 'react';
import {
  FlatList,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const {width, height} = new Dimensions.get('screen');
const AllItems = [
  {
    img: {uri: 'https://bit.ly/2UkSTId'},
    title: 'The Little Mermaid',
    des: 'The 1989 animated feature adapted by Disne.',
    cat: 'fery tales',
  },
  {
    img: {uri: 'https://bit.ly/3h0nYZB'},
    title: 'Cruella',
    des: "MAC's Cruella-Inspired Makeup Is Its Most Diabolical Disney  ",
    cat: 'fery tales',
  },
  {
    img: {uri: 'https://bit.ly/3xE3c8G'},
    title: 'Mullan',
    des: 'Malay MailMalaysian cinema chains hit by Covid-19 outbreak w',
    cat: 'fery tales',
  },
  {
    img: {uri: 'https://bit.ly/2UkSTId'},
    title: 'The Little Mermaid',
    des: 'The 1989 animated feature adapted by Disne.',
    cat: 'fery tales',
  },
];
export default function All() {
  return (
    <FlatList
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 15,
        height: height * 0.16 + 60,
      }}
      decelerationRate={0.1}
      data={AllItems}
      keyExtractor={(item, index) => index}
      renderItem={({item, index}) => {
        return (
          <View
            style={{
              width: width * 0.5,
              height: height * 0.13,
              backgroundColor: 'white',
              marginTop: 60,
              flexDirection: 'row',
              marginRight: width * 0.05,
              borderRadius: 7,
              justifyContent: 'space-around',
            }}>
            <View
              style={{
                width: '40%',
                height: height * 0.16,
                backgroundColor: '#036685',
                borderRadius: 7,
                position: 'relative',
                top: -height * 0.13 * 0.3,
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
              <Text style={{fontWeight: 'bold', fontSize: 12}}>
                {item.title}
              </Text>
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 10.5,
                  color: '#ccc',
                }}>
                {item.des}
              </Text>
              <View style={{flexDirection: 'row'}}>
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
      }}
    />
  );
}

const styles = StyleSheet.create({});

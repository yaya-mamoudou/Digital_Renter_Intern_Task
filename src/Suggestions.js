import React from 'react';
import {
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
  Text,
  View,
} from 'react-native';

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

export default function Suggestions() {
  return (
    <View style={{marginTop: '8%'}}>
      <Text style={{fontSize: 13, fontWeight: '700'}}>You may also like</Text>
      <FlatList
        data={AllItems}
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={(item, index) => index}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                height:
                  height > width
                    ? height < 600
                      ? height * 0.3
                      : height * 0.3
                    : width * 0.2,
                width: width > 600 ? width * 0.52 * 0.45 : width * 0.6 * 0.52,
                borderRadius: 5,
                marginRight: 20,
                marginVertical: '15%',
              }}>
              <Image
                source={item.img}
                style={{
                  width: '100%',
                  height: '70%',
                  borderRadius: 5,
                  backgroundColor: 'teal',
                }}
              />
              <View>
                <Text
                  numberOfLines={1}
                  style={{fontWeight: 'bold', fontSize: 10, marginTop: 5}}>
                  {item.title}
                </Text>

                <Text
                  numberOfLines={1}
                  style={{
                    fontWeight: 'bold',
                    fontSize: 9,
                    marginTop: 5,
                    color: '#036685',
                  }}>
                  {item.cat}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

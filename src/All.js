import React from 'react';
import {
  FlatList,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AllFlatlistComp1 from './AllFlatlistComp1';
import Suggestions from './Suggestions';

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
    <View style={{marginTop: 10}}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          height:
            height > width
              ? height < 700
                ? height * 0.25
                : height * 0.2
              : width * 0.3,
        }}
        decelerationRate="fast"
        snapToInterval={20}
        data={AllItems}
        keyExtractor={(item, index) => index}
        renderItem={({item, index}) => {
          return <AllFlatlistComp1 item={item} index={index} />;
        }}
      />
      <Suggestions />
    </View>
  );
}

const styles = StyleSheet.create({});

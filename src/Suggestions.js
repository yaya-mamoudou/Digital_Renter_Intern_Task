import React from 'react';
import {
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
  Text,
  View,
} from 'react-native';
import {Interest as AllItems} from './data/DataSet';
const {width, height} = new Dimensions.get('screen');

const suggestion = item => {
  return (
    <View style={styles.suggestionBox}>
      <Image source={item.img} style={styles.suggestImg} />
      <View>
        <Text numberOfLines={1} style={styles.titleFont}>
          {item.title}
        </Text>

        <Text numberOfLines={1} style={styles.catFont}>
          {item.cat}
        </Text>
      </View>
    </View>
  );
};

export default function Suggestions() {
  return (
    <View style={{marginTop: '8%'}}>
      <Text style={{fontSize: 13, fontWeight: '700', marginLeft: 10}}>
        You may also like
      </Text>
      <FlatList
        data={AllItems}
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={(item, index) => index}
        renderItem={({item}) => {
          return suggestion(item);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  suggestionBox: {
    height:
      height > width
        ? height < 600
          ? height * 0.3
          : height * 0.3
        : width * 0.2,
    width: width > 600 ? width * 0.52 * 0.45 : width * 0.6 * 0.52,
    borderRadius: 5,
    marginHorizontal: 15,
    marginVertical: '15%',
  },
  suggestImg: {
    width: '100%',
    height: '70%',
    borderRadius: 5,
    backgroundColor: 'teal',
  },
  catFont: {
    fontWeight: 'bold',
    fontSize: 9,
    marginTop: 5,
    color: '#036685',
  },
  titleFont: {fontWeight: 'bold', fontSize: 10, marginTop: 5},
});

import React from 'react';
import {
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Pressable,
} from 'react-native';
import {Interest as AllItems} from './data/DataSet';
const {width, height} = new Dimensions.get('screen');

export default function Suggestions({nextScreen}) {
  const suggestion = (item, nextScreen) => {
    return (
      <View style={styles.suggestionBox}>
        <TouchableOpacity
          onPress={() => nextScreen(item)}
          style={{width: '100%', height: '100%'}}>
          <Image source={item.img} style={styles.suggestImg} />
          <View>
            <Text numberOfLines={1} style={styles.titleFont}>
              {item.title}
            </Text>

            <Text numberOfLines={1} style={styles.catFont}>
              {item.cat}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={{marginTop: '8%'}}>
      <Text style={{fontSize: 15, fontWeight: 'bold', marginLeft: 10}}>
        You may also like
      </Text>
      <FlatList
        data={AllItems}
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={(item, index) => index}
        renderItem={({item}) => suggestion(item, nextScreen)}
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
          : height * 0.26
        : width * 0.2,
    width: width > 600 ? width * 0.52 * 0.45 : width * 0.6 * 0.43,
    borderRadius: 5,
    marginHorizontal: 15,
    marginVertical: '15%',
  },
  suggestImg: {
    width: '100%',
    height: '60%',
    borderRadius: 5,
    backgroundColor: 'teal',
  },
  catFont: {
    fontWeight: 'bold',
    fontSize: 13,
    marginTop: 5,
    color: '#036685',
  },
  titleFont: {fontWeight: 'bold', fontSize: 13, marginTop: 5},
});

import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Dimensions,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import AllFlatlistComp1 from './AllFlatlistComp1';
import Suggestions from './Suggestions';
import {AllItems} from './data/DataSet';
import MyModal from './MyModal';
const {width, height} = new Dimensions.get('screen');

export default function All() {
  const [modalState, setmodalState] = useState(false);
  const [modalData, setmodalData] = useState({});
  const toggleModal = () => {
    modalState ? setmodalState(false) : setmodalState(true);
  };
  const nextScreen = item => {
    new Promise((resolve, reject) => {
      resolve(setmodalData(item));
    }).then(() => toggleModal());
  };
  return (
    <View style={{marginTop: 10}}>
      <MyModal
        modalVisible={modalState}
        modalData={modalData}
        setModalVisible={toggleModal}
      />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatLstyle}
        decelerationRate="fast"
        snapToInterval={20}
        data={AllItems}
        keyExtractor={(item, index) => index}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={{alignSelf: 'flex-end'}}
              onPress={() => nextScreen(item)}>
              <AllFlatlistComp1 item={item} index={index} />
            </TouchableOpacity>
          );
        }}
      />
      <Suggestions />
    </View>
  );
}

const styles = StyleSheet.create({
  flatLstyle: {
    height:
      height > width
        ? height < 700
          ? height * 0.25
          : height * 0.2
        : width * 0.3,
  },
});

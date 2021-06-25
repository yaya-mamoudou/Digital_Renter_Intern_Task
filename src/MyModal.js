import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Modal,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const {width, height} = new Dimensions.get('screen');

export default function MyModal({modalVisible, setModalVisible, modalData}) {
  return (
    <Modal
      animationType="slide"
      statusBarTranslucent
      presentationStyle="overFullScreen"
      visible={modalVisible}>
      <View style={{height: height}}>
        <ImageBackground
          source={modalData.img}
          resizeMode="cover"
          style={{height: height * 0.4, justifyContent: 'flex-end'}}>
          <TouchableOpacity
            style={{
              marginLeft: 8,
            }}
            onPress={() => setModalVisible()}>
            <View style={styles.backBtn}>
              <Text style={{fontWeight: 'bold'}}>Back</Text>
              <Icon name="chevron-down" size={15} />
            </View>
          </TouchableOpacity>
        </ImageBackground>

        <View style={{flexDirection: 'row', marginTop: '8%'}}>
          <Text style={styles.title}>{modalData.title}</Text>
          <View
            style={{
              paddingRight: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Icon name="star" size={14} color="orange" />
              <Icon name="star" size={14} color="orange" />
              <Icon name="star" size={14} color="orange" />
              <Icon name="star" size={14} color="orange" />
              <Icon name="star" size={14} color="orange" />
            </View>
            <Text style={styles.cat}>{modalData.cat}</Text>
          </View>
        </View>
        <View style={{padding: '5%'}}>
          <Text style={{fontSize: 12.5, color: '#666666', lineHeight: 30}}>
            {modalData.desLong}
          </Text>
        </View>
        <View style={styles.action}>
          <View style={styles.readBook}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Read Book</Text>
          </View>
          <View style={styles.moreInfo}>
            <Text style={{color: '#666666', fontWeight: '500'}}>More Info</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eea',
    width: 80,
    padding: '1.5%',
    justifyContent: 'space-around',
    borderRadius: 3,
    borderWidth: 2,
    marginBottom: '-4%',
  },
  moreInfo: {
    width: '30%',
    padding: '2%',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#666666',
    borderWidth: 1,
    borderRadius: 5,
  },
  readBook: {
    backgroundColor: '#036685',
    width: '30%',
    padding: '2%',
    alignItems: 'center',
    borderRadius: 3,
    justifyContent: 'center',
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 'auto',
    marginBottom: '20%',
  },
  cat: {
    fontWeight: '600',
    fontSize: 10.5,
    color: 'green',
    marginLeft: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    marginRight: 'auto',
  },
});

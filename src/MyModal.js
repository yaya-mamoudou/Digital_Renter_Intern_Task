import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Modal,
  Image,
  Pressable,
  ImageBackground,
  Platform,
  NativeModules,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const {StatusBarManager} = NativeModules;

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

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
          style={{height: height * 0.28}}>
          <Pressable
            style={{
              zIndex: 2,
              marginTop: STATUSBAR_HEIGHT + 5,
              marginLeft: 20,
            }}
            onPress={() => setModalVisible()}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#eea',
                width: 80,
                padding: '1%',
                justifyContent: 'space-around',
                borderRadius: 3,
              }}>
              <Text>Back</Text>
              <Icon name="chevron-down" size={15} />
            </View>
          </Pressable>
        </ImageBackground>

        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              marginLeft: 10,
              marginRight: 'auto',
            }}>
            {modalData.title}
          </Text>
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
            <Text
              style={{
                fontWeight: '600',
                fontSize: 10.5,
                color: 'green',
                marginLeft: 20,
              }}>
              {modalData.cat}
            </Text>
          </View>
        </View>
        <View style={{padding: '5%'}}>
          <Text style={{fontSize: 12.5, color: '#666666', lineHeight: 23}}>
            {modalData.desLong}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 'auto',
            marginBottom: 50,
          }}>
          <View
            style={{
              backgroundColor: '#036685',
              width: '30%',
              padding: '2%',
              alignItems: 'center',
              borderRadius: 3,
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Read Book</Text>
          </View>
          <View
            style={{
              width: '30%',
              padding: '2%',
              alignItems: 'center',
              justifyContent: 'center',
              borderColor: '#666666',
              borderWidth: 1,
              borderRadius: 5,
            }}>
            <Text style={{color: '#666666', fontWeight: '500'}}>Read Book</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({});

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useRef, useState } from 'react';
import HomeViewController from './app/controller/HomeViewController';
import { Image, Animated, ScrollView, StyleSheet, Text, PanResponder } from 'react-native';
import FrontPhoto from './app/component/FrontPhoto';
import BackPhoto from './app/component/BackPhoto';
import { View } from 'react-native';
import TshirtSwitchBtnComponent from './app/component/TshirtSwitchBtnComponent';
import ActionBtn from './app/component/ActionBtn';

function App() {
  const { uploadImage, currentState, updateTshirtState, uploadGalleryImage } = HomeViewController();
  const [dropZoneValues, setDropZoneValues] = useState(null);
  const pan = useRef(new Animated.ValueXY()).current;

  const isDropZone = (gesture) => {
    console.log("geasture is ", gesture)
    return dropZoneValues &&
      gesture.moveY > dropZoneValues.y &&
      gesture.moveY < dropZoneValues.y + dropZoneValues.height
  }

  const panResponser = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        { dx: pan.x, dy: pan.y }
      ], { useNativeDriver: false }),
      onPanResponderRelease(e, gestureState) {
        if (isDropZone(gestureState)) {
          console.log("guester issss ", gestureState)
          pan.extractOffset()
        }
        // else {
        //   Animated.spring(pan, {
        //     toValue: { x: 0, y: 0 },
        //     useNativeDriver: false
        //   }).start();
        // }
      },
    })
  ).current;

  const handleEventDrop = (event) => {
    console.log("event is ", event)
    setDropZoneValues(event.nativeEvent.layout)
    console.log("new drop is ", dropZoneValues)
  }

  return (
    <ScrollView style={styles.screenStyle}>
      <Text>Select T-Shirt Color</Text>
      <View
        onLayout={(event) => handleEventDrop(event)}
      >
        {/*  */}
        {
          currentState === 0 ?
            <FrontPhoto color='#FFFFFF' /> :
            <BackPhoto color='#FFFFFF' />
        }
      </View>
      {
        uploadImage &&
        <Animated.View
          {...panResponser.panHandlers}
          style={[pan.getLayout(), styles.uploadedImageContainer]}
        >
          <Image
            source={{ uri: uploadImage }}
            style={styles.uploadedImageStyle}
          />
        </Animated.View>
      }
      <View style={styles.SwitchBtnContainer}>
        <TshirtSwitchBtnComponent name='return-down-back-outline' updateSwitch={updateTshirtState} />
        <TshirtSwitchBtnComponent name='return-down-forward-outline' updateSwitch={updateTshirtState} />
      </View>
      <ActionBtn upload={uploadGalleryImage} />
    </ScrollView>
  );
}
export default App;

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    backgroundColor: "#D3D3D3",
  },
  uploadedImageContainer: {
    flex: 1,
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  uploadedImageStyle: {
    width: 70,
    height: 80,
    resizeMode: 'contain',
  },
  SwitchBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 24
  },
  draggableContainer: { position: 'absolute', bottom: 100 },
  text: { color: 'white', fontWeight: 'bold' }

})

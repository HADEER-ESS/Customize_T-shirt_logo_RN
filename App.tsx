/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import HomeViewController from './app/controller/HomeViewController';
import { Image, Animated, ScrollView, StyleSheet, Text } from 'react-native';
import FrontPhoto from './app/component/FrontPhoto';
import BackPhoto from './app/component/BackPhoto';
import { View } from 'react-native';
import TshirtSwitchBtnComponent from './app/component/TshirtSwitchBtnComponent';
import ActionBtn from './app/component/ActionBtn';
import AnimationController from './app/controller/AnimationController';
import ViewShot from 'react-native-view-shot';
import DownloadImageController from './app/controller/DownloadImageController';

function App() {
  const { uploadImage, currentState, updateTshirtState, uploadGalleryImage } = HomeViewController();
  const { pan, panResponser, handleEventDrop } = AnimationController();
  const { downloadImageHandler, screenShotRef } = DownloadImageController();


  return (
    <ScrollView style={styles.screenStyle}>
      <Text>Select T-Shirt Color</Text>
      <View
        onLayout={(event) => handleEventDrop(event)}
      >
        <ViewShot ref={screenShotRef}>
          {
            currentState === 0 ?
              <FrontPhoto color="#FFFFFF" /> :
              <BackPhoto color="#FFFFFF" />
          }
        </ViewShot>
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
        <TshirtSwitchBtnComponent name="return-down-back-outline" updateSwitch={updateTshirtState} />
        <TshirtSwitchBtnComponent name="return-down-forward-outline" updateSwitch={updateTshirtState} />
      </View>
      <ActionBtn title='Upload Image' upload={uploadGalleryImage} />
      <ActionBtn title='Download Image' upload={downloadImageHandler} />
    </ScrollView>
  );
}
export default App;

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    backgroundColor: '#D3D3D3',
  },
  uploadedImageContainer: {
    // position: 'absolute',   // Required for free movement
    width: 50,
    height: 50,
    borderRadius: 25,
    zIndex: 100,
    // top: 350,  // or whatever starting point you want
    // left: 7,
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
    marginTop: 24,
  },
  draggableContainer: { position: 'absolute', bottom: 100 },
  text: { color: 'white', fontWeight: 'bold' },

});

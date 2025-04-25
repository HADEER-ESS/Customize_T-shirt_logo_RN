/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import HomeScreen from './app/view/HomeScreen';

function App() {
  return (
    <GestureHandlerRootView
      style={styles.screenStyle}
    >
      <HomeScreen />
    </GestureHandlerRootView>
  )
}
export default App

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    backgroundColor: "#dfdfdf"
  },
})

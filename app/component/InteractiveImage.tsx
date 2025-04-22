import React from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { GestureDetector } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import InteractiveImageController from '../controller/InteractiveImageController';

type props = {
    uri: string,
}

const InteractiveImage = ({ uri }: props) => {
    const { composed, animatedStyle } = InteractiveImageController();
    return (
        <TouchableWithoutFeedback onLongPress={() => {/*On long press, it must show a dialog if i would like to remove img*/ }}>
            <GestureDetector gesture={composed}>
                <Animated.Image
                    source={{ uri }}
                    style={[styles.image, animatedStyle]}
                    resizeMode={'contain'}
                />
            </GestureDetector>
        </TouchableWithoutFeedback>

    );
};

export default InteractiveImage;

const styles = StyleSheet.create({
    image: {
        width: 70,
        height: 80,
        zIndex: 9999,
    },
});

import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { GestureDetector } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import InteractiveImageController from '../controller/InteractiveImageController';
import HandleRemoveImageAndSlots from '../controller/HandleRemoveImageAndSlots';

type props = {
    uri: string,
    idx: number
}

const InteractiveImage = ({ uri, idx }: props) => {
    const { composed, animatedStyle } = InteractiveImageController();
    const { longPressDialog } = HandleRemoveImageAndSlots();
    return (
        <TouchableOpacity onLongPress={() => { longPressDialog(idx) }}>
            <GestureDetector gesture={composed}>
                <Animated.Image
                    source={{ uri }}
                    style={[styles.image, animatedStyle]}
                    resizeMode={'contain'}
                />
            </GestureDetector>
        </TouchableOpacity>

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

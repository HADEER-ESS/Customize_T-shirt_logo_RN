import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { GestureDetector } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import InteractiveImageController from '../controller/InteractiveImageController';
import ImageObj from '../type/ImageObj';

type props = {
    data: ImageObj,
    action: (idx: number) => void
}

const InteractiveImage = ({ data, action }: props) => {
    const { composed, animatedStyle } = InteractiveImageController()
    return (
        <TouchableOpacity onLongPress={() => action(data.id)}>
            <GestureDetector gesture={composed}>
                <Animated.Image
                    source={{ uri: data.src }}
                    style={[styles.image, animatedStyle]}
                    resizeMode={'contain'}
                />
            </GestureDetector>
        </TouchableOpacity>

    )
}

export default InteractiveImage

const styles = StyleSheet.create({
    image: {
        width: 70,
        height: 80,
        zIndex: 9999,
    },
})

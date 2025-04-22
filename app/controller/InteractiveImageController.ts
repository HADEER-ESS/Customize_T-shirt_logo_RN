import { Gesture } from 'react-native-gesture-handler';
import { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

const InteractiveImageController = () => {

    // Position
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);

    //for tracking the current position for image x and image Y
    const offsetX = useSharedValue(0);
    const offsetY = useSharedValue(0);

    // Scale
    const scale = useSharedValue(1);
    const savedScale = useSharedValue(1);

    // Rotation
    const rotation = useSharedValue(0);
    const savedRotation = useSharedValue(0);

    // Pan gesture
    const pan = Gesture.Pan()
        .onStart(() => {
            // Set the latest position as offset before dragging
            offsetX.value = translateX.value;
            offsetY.value = translateY.value;
        })
        .onUpdate((e) => {
            translateX.value = offsetX.value + e.translationX;
            translateY.value = offsetY.value + e.translationY;
        })
        .onEnd(() => {
            // onDrop(translateX.value, translateY.value);
            offsetX.value = translateX.value;
            offsetY.value = translateY.value;
        });

    // Pinch gesture
    const pinch = Gesture.Pinch()
        .onUpdate((e) => {
            scale.value = savedScale.value * e.scale;
        })
        .onEnd(() => {
            savedScale.value = scale.value;
        });

    // Rotate gesture
    const rotate = Gesture.Rotation()
        .onUpdate((e) => {
            rotation.value = savedRotation.value + e.rotation;
        })
        .onEnd(() => {
            savedRotation.value = rotation.value;
        });

    // Combine them
    const composed = Gesture.Simultaneous(pan, pinch, rotate);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [
            { translateX: translateX.value },
            { translateY: translateY.value },
            { scale: scale.value },
            { rotateZ: `${rotation.value}rad` },
        ],
    }));

    return {
        composed,
        animatedStyle,
    };
};



export default InteractiveImageController;

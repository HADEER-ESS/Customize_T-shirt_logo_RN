import { useRef, useState } from 'react';
import { Animated, PanResponder } from 'react-native';


type ZoneValue = {
    height: number,
    width: number,
    x: number,
    y: number
}

const AnimationController = () => {
    const [dropZoneValues, setDropZoneValues] = useState<ZoneValue | null>(null);

    const position = useRef({ x: 0, y: 0 }).current;
    const pan = useRef(new Animated.ValueXY()).current;

    const isDropZone = (gesture: any) => {
        console.log('geasture is ', gesture);
        if (!dropZoneValues) return false;
        const { moveX, moveY } = gesture;
        return (
            moveX >= dropZoneValues?.x &&
            moveX <= dropZoneValues.x + dropZoneValues.width &&
            moveY >= dropZoneValues.y &&
            moveY <= dropZoneValues.y + dropZoneValues.height
        )

    };

    const panResponser = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                pan.setOffset({
                    x: pan.x.__getValue(), // Get the current value
                    y: pan.y.__getValue(),
                });
                pan.setValue({ x: 0, y: 0 });
            },
            onPanResponderMove: Animated.event([
                null,
                { dx: pan.x, dy: pan.y },
            ], { useNativeDriver: false }),
            onPanResponderRelease(e, gestureState) {
                console.log("Dropped at:", gestureState.moveX, gestureState.moveY);
                if (isDropZone(gestureState)) {
                    pan.flattenOffset(); // Merge offset into pan value

                    const x = pan.x.__getValue();
                    const y = pan.y.__getValue();
                    position.x = x;
                    position.y = y;
                }
            },
        })
    ).current;

    const handleEventDrop = (event: any) => {
        console.log('event is ', event);
        setDropZoneValues(event.nativeEvent.layout);
        console.log('new drop is ', event.nativeEvent.layout);
    };






    return {
        handleEventDrop,
        panResponser,
        pan,
    };
};


export default AnimationController;

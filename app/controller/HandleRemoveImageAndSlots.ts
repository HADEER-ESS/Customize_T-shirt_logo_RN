import { Alert } from "react-native";
import HomeViewController from "./HomeViewController";

const HandleRemoveImageAndSlots = () => {
    const SLOT_COUNT = 4;
    const { removeImageFromStack } = HomeViewController();


    const longPressDialog = (idx: number): void => {
        console.log("yes here")
        Alert.alert(
            "Delete Image",
            'Are you sure you want to remove this image?',
            [
                { text: 'Cancel', style: 'cancel' },
                { text: 'Delete', style: 'destructive', onPress: () => removeImageFromStack(idx) }
            ]
        );
    };

    return {
        SLOT_COUNT,
        longPressDialog,
    };
};

export default HandleRemoveImageAndSlots;

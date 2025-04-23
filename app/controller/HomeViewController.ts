import { useState } from 'react';
import { ToastAndroid } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';


const HomeViewController = () => {
    const SLOT_COUNT = 4;
    const [currentState, setCurrentState] = useState<number>(0);
    const [updateColor, setUpdateColor] = useState<string>('#FFFFFF');
    const [uploadImage, setUploadImage] = useState<string[]>([]);

    const updateTshirtState = () => {
        let state = currentState === 0 ? 1 : 0;
        setCurrentState(state);
    };

    const updateTshirtColor = (color: string) => {
        setUpdateColor(color);
    };

    const uploadGalleryImage = async () => {
        if (uploadImage.length > 3) {
            ToastAndroid.show('Sorry!! You Can Not add more than 4 Image', 1000);
            return;
        }
        try {
            await launchImageLibrary(
                {
                    mediaType: 'photo',
                    includeBase64: true,
                    maxWidth: 50,
                    maxHeight: 50,
                    quality: 1,
                },
                (response) => {
                    if (response.didCancel || response.errorCode) {
                    }
                    else {
                        setUploadImage(prev => [...(prev || []), `data:image/png;base64,${response.assets[0].base64}`])
                    }
                }
            )
        } catch (error) {
            console.log("error in upload ", error)
        }

    }

    const removeImageFromStack = (idx: number): void => {
        console.log("delete function called ...", idx)
        setUploadImage(prev => {
            console.log("prev image is ", prev);
            return prev?.filter((_, index) => index !== idx) || []
        }
        )
    };


    return {
        currentState,
        updateTshirtState,
        updateColor,
        updateTshirtColor,
        uploadGalleryImage,
        uploadImage,
        SLOT_COUNT,
        removeImageFromStack,
    };
};


export default HomeViewController;

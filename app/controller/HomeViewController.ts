import { useState } from 'react';
import { launchImageLibrary } from 'react-native-image-picker';


const HomeViewController = () => {
    const [currentState, setCurrentState] = useState<number>(0);
    const [updateColor, setUpdateColor] = useState<string>('#FFFFFF');
    const [uploadImage, setUploadImage] = useState<string | undefined>(undefined)

    const updateTshirtState = () => {
        console.log("Called ", currentState)
        let state = currentState === 0 ? 1 : 0;
        setCurrentState(state);
    };

    const updateTshirtColor = (color: string) => {
        setUpdateColor(color);
    };

    const uploadGalleryImage = async () => {
        console.log("enter upload Gallery image function")
        try {
            await launchImageLibrary(
                {
                    mediaType: 'photo',
                    includeBase64: true,
                    maxWidth: 50,
                    maxHeight: 50,
                    quality: 0.8,
                },
                (response) => {
                    console.log("responseeeeeeeeeee base-64 ", response);
                    if (response.didCancel || response.errorCode) {
                        console.log("response error is ", response);
                    }
                    else {
                        setUploadImage(`data:image/png;base64,${response.assets[0].base64}`);
                    }
                }
            )
        } catch (error) {
            console.log("error in upload ", error)
        }

    }


    return {
        currentState,
        updateTshirtState,
        updateColor,
        updateTshirtColor,
        uploadGalleryImage,
        uploadImage,
    };
};


export default HomeViewController;

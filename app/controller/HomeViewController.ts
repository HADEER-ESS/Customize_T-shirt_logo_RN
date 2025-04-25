import { useState } from 'react';
import { Alert, ToastAndroid } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import ImageObj from '../type/ImageObj';



const HomeViewController = () => {
    const SLOT_COUNT = 4
    const [currentState, setCurrentState] = useState<number>(0)
    const [updateColor, setUpdateColor] = useState<string>('#FFFFFF')
    const [uploadImage, setUploadImage] = useState<ImageObj[]>([])

    const updateTshirtState = () => {
        let state = currentState === 0 ? 1 : 0
        setCurrentState(state)
    }

    const updateTshirtColor = (color: string) => {
        setUpdateColor(color)
    }

    const uploadGalleryImage = async () => {
        if (uploadImage.length > 3) {
            ToastAndroid.show('Sorry!! You Can Not add more than 4 Image', 1000)
            return
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
                        setUploadImage(
                            [...uploadImage,
                            {
                                id: uploadImage.length + 1,
                                src: `data:image/png;base64,${response.assets[0].base64}`
                            }
                            ]
                        )
                    }
                }
            )
        } catch (error) {
            console.log("error in upload ", error)
        }

    }

    const longPressDialog = (id: number): void => {
        Alert.alert(
            'Delete Image',
            'Are you sure you want to remove this image?',
            [
                { text: 'Cancel', style: 'cancel' },
                { text: 'Delete', style: 'destructive', onPress: () => removeImageFromStack(id) }
            ]
        )
    }

    const removeImageFromStack = (id: number): void => {
        console.log("idx ", id)

        setUploadImage(
            uploadImage.filter((item) => item.id !== id)
        )
    }


    return {
        currentState,
        updateTshirtState,
        updateColor,
        updateTshirtColor,
        uploadGalleryImage,
        uploadImage,
        SLOT_COUNT,
        longPressDialog,
    }
}


export default HomeViewController

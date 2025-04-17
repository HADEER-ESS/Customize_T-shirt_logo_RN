import { CameraRoll } from "@react-native-camera-roll/camera-roll";
import { useRef } from "react";
import { PermissionsAndroid, Platform } from "react-native";
import { captureRef } from "react-native-view-shot";

const DownloadImageController = () => {

    const screenShotRef = useRef(null);

    //Function to check if permission is already Taked or not.
    const getPermissionToDownload = async (): Promise<boolean | void> => {
        if (Platform.Version >= 33) {
            return Promise.all([
                PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES)
            ]).then(
                ([hasReadMediaImagesPermission]) => {
                    hasReadMediaImagesPermission;
                }
            );
        }
        else {
            return PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);
        }
    };


    //Function to get the permission to access Gallery download
    const getPermissionToAccessGallaryDownload = async () => {
        if (Platform.Version >= 33) {
            return PermissionsAndroid
                .request(PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES)
                .then(
                    (status) => status === PermissionsAndroid.RESULTS.GRANTED
                );
        }
        else {
            return PermissionsAndroid
                .request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE)
                .then(
                    (status) => status === PermissionsAndroid.RESULTS.GRANTED
                );
        }
    };

    //The outer Function that Will handle inner function calls
    //if the permission is already taken => return true => continue to download image
    //otherwise, call the function to get the permission from user to downalod image
    const handleScreenDownloadPermission = async (): Promise<boolean | void> => {
        if (await getPermissionToDownload()) return true;
        return await getPermissionToAccessGallaryDownload();
    };


    //The function that will download image in User device, using REF
    const downloadImageHandler = async (): Promise<void> => {
        console.log("called")
        if (Platform.OS === 'android' && !(await handleScreenDownloadPermission())) {
            console.log("there is no permission ");
            return;
        }
        try {
            //get the URI=> image format
            const result = await captureRef(screenShotRef, {
                result: 'tmpfile',
                quality: 1,
                format: 'png',
            })
            console.log("result ", result)
            CameraRoll.saveAsset(result, { type: 'photo' });
        } catch (error) {
            console.log("error in download image ", error);
        }
    }


    return {
        handleScreenDownloadPermission,
        downloadImageHandler,
        screenShotRef,
    };
};


export default DownloadImageController;

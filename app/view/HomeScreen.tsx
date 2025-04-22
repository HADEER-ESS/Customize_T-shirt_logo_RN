import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ViewShot from 'react-native-view-shot';
import FrontPhoto from '../component/FrontPhoto';
import BackPhoto from '../component/BackPhoto';
import InteractiveImage from '../component/InteractiveImage';
import TshirtSwitchBtnComponent from '../component/TshirtSwitchBtnComponent';
import ActionBtn from '../component/ActionBtn';
import HomeViewController from '../controller/HomeViewController';
import DownloadImageController from '../controller/DownloadImageController';

const HomeScreen = () => {
    const { uploadImage, currentState, updateTshirtState, uploadGalleryImage } = HomeViewController();
    const { downloadImageHandler, screenShotRef } = DownloadImageController();
    return (
        <View>
            <Text>Select T-Shirt Color</Text>
            <ViewShot ref={screenShotRef}>
                {
                    currentState === 0 ?
                        <FrontPhoto color="#FFFFFF" /> :
                        <BackPhoto color="#FFFFFF" />
                }
                {
                    uploadImage?.length &&
                    <View style={styles.FlexImageContainer}>
                        {
                            uploadImage.map((item, index) =>
                                <InteractiveImage key={`no. ${index}`} uri={item} />
                            )
                        }

                    </View>
                }
            </ViewShot>
            <View style={styles.SwitchBtnContainer}>
                <TshirtSwitchBtnComponent name="return-down-back-outline" updateSwitch={updateTshirtState} />
                <TshirtSwitchBtnComponent name="return-down-forward-outline" updateSwitch={updateTshirtState} />
            </View>
            <ActionBtn title="Upload Image" upload={uploadGalleryImage} />
            <ActionBtn title="Download Image" upload={downloadImageHandler} />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    SwitchBtnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 16,
        marginTop: 24,
    },
    FlexImageContainer: {
        flexDirection: 'row',
    },
});

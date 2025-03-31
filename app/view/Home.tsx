import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import FrontPhoto from '../component/FrontPhoto';
import TshirtSwitchBtnComponent from '../component/TshirtSwitchBtnComponent';
import BackPhoto from '../component/BackPhoto';
import HomeViewController from '../controller/HomeViewController';

const Home = () => {
    const { currentState, updateTshirtState } = HomeViewController();
    return (
        <ScrollView style={styles.screenStyle}>
            <Text>Select T-Shirt Color</Text>
            {
                currentState === 0 ?
                    <FrontPhoto color='#FFFFFF' /> :
                    <BackPhoto color='#FFFFFF' />
            }
            <View style={styles.SwitchBtnContainer}>
                <TshirtSwitchBtnComponent name='return-down-back-outline' updateSwitch={updateTshirtState} />
                <TshirtSwitchBtnComponent name='return-down-forward-outline' updateSwitch={updateTshirtState} />
            </View>
        </ScrollView>
    );
};

export default Home;

const styles = StyleSheet.create({
    screenStyle: {
        flex: 1,
        backgroundColor: "#D3D3D3",
    },
    SwitchBtnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 16,
        marginTop: 24
    }
})
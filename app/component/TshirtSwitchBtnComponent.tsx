import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';

type props = {
    name: string,
    updateSwitch: () => void
}

const TshirtSwitchBtnComponent = ({ name, updateSwitch }: props) => {
    return (
        <TouchableOpacity onPress={updateSwitch} style={styles.btnContainerStyle}>
            <Ionicons name={name} size={24} color={"#000000"} />
        </TouchableOpacity>
    );
};

export default TshirtSwitchBtnComponent;

const styles = StyleSheet.create({
    btnContainerStyle: {
        backgroundColor: "#a8a8a8",
        borderRadius: 12,
        paddingHorizontal: 8,
        paddingVertical: 4
    }
})
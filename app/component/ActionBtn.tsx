import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type props = {
    upload: () => void
}

const ActionBtn = ({ upload }: props) => {
    return (
        <TouchableOpacity
            style={styles.btnContainerStyle}
            onPress={upload}
        >
            <Text style={styles.textStyle}>Upload Image</Text>
        </TouchableOpacity>
    )
}

export default ActionBtn

const styles = StyleSheet.create({
    btnContainerStyle: {
        backgroundColor: "#f8f8",
        paddingHorizontal: 18,
        paddingVertical: 9,
        alignSelf: 'center'
    },
    textStyle: {
        color: "#FFFFFF",
        textAlign: 'center',
        fontSize: 14
    }
})
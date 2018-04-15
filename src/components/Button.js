import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const Button = ({ whenPressed, children }) => {  // Props of buttton in albumList destructred

    //    const { whenPressed, children } = props;

    const { textStyle,
        buttonStyle } = styles;

    return (
        <TouchableOpacity style={buttonStyle} onPress={whenPressed}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingBottom: 10,
        paddingTop: 10,
        alignSelf: 'center'
    },

    buttonStyle: {
        flex: 1,
        backgroundColor: '#fff',
        borderColor: '#007aff',
        borderWidth: 1,
        borderRadius: 5,
        marginLeft: 5,
        marginRight: 5,
    }
});
export default Button;
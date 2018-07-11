import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
    const { textStyle, buttonStyle, text } = styles
    const { onPress, children } = props
    return(
        <TouchableOpacity onPress = { onPress } style = { buttonStyle} >
            <Text style = { textStyle }>
                 { children }
            </Text>
        </TouchableOpacity>    
         
    )

}

const styles = {

    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    },

    buttonStyle: {
        flex: 1,
        height: 40,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderColor: '#007aff',
        borderWidth: 1,
        marginLeft: 5,
        marginRigth: 5,
    },
}

export { Button }


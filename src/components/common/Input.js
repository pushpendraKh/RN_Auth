import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';

const Input = (props) => {
    const { inputStyle, labelStyle, containerStyle} = styles
    const { label, value, onChangeText, placeholder, secureTextEntry } = props
    return(
        <View style={containerStyle}>
            <Text style={labelStyle}> {label} </Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                value={value}
                onChangeText={onChangeText}
                style={inputStyle}
                autoCorrect={false}
                placeholder={placeholder}
            />
        </View>  
    )

}

const styles = {

    inputStyle: {
        color: '#000',
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 18,
        lineHeight: 23,
        borderBottomWidth: 1,
        borderColor: '#000',
        flex: 2,
    },

    labelStyle:{
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },

    containerStyle: {
        height: 40,
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center'
    },
}

export { Input }


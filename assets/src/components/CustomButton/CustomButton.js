import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({OnPress, text, type = 'PRIMARY', bgColor, fgColor}) => {
  return (
    <Pressable 
        onPress={OnPress} 
        style={[styles.container, styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor}: {}
        ]}>
    <Text  
        style={[styles.text, styles[`text_${type}`],
        fgColor ? {color: fgColor}: {}
    ]}>
    {text}</Text>
    </Pressable>
  )
}

const styles=StyleSheet.create({

    container:{
        // backgroundColor:'#3B71F3',
        width:'100%',
        padding: 15,
        alignItems:'center',
        marginVertical:5,
       
    },
    container_PRIMARY:{
        backgroundColor:'#3B71F3',
    },
    container_TERTIARY:{
        // backgroundColor:'#3B71F3',
    },

    text:{
        fontWeight:'bold'
    },
    text_PRIMARY:{
        color:'white',
    },
    text_TERTIARY:{
        color:'gray',
    },

})
export default CustomButton
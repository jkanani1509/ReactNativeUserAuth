import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = ({value, setValue, onBlur, placeholder, secureTextEntry}) => {
  return (
    <View style={style.container}>
        <TextInput 
            value={value}
            onChangeText={setValue}
            placeholder={placeholder}
            style={style.input}
            secureTextEntry={secureTextEntry}
            onBlur={onBlur}
        />
    </View>
  )
}
const style=StyleSheet.create({
    container:{
        backgroundColor: 'white',
        width:'100%',

        borderColor:'#e8e8e8',
        borderWidth:1,
        borderRadius:5,

        paddingHorizontal:10,
        marginVertical:5,

        
    },
    input:{
      height:40
    },
})

export default CustomInput
import { useState } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import Logo from '../../../../assets/images/logo.jpg'
import React from 'react'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const ReSetPasswordScreen = () => {
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const onSubmitPress =()=>{
        alert("ABABABABQQQQ");
    }
     
    const onSignUpPress =()=>{
         console.warn('Sign In');
        navigation.navigate('SignIn');
    }
   
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={style.root} >
      {/* <Image source={Logo}  style={[style.logo]} resizeMode='contain' /> */}
  
    <Text style={style.title}>Reset Password</Text>
        
        <CustomInput 
            placeholder='Password' 
            value={password} 
            setValue={setPassword} 
            secureTextEntry={true}
        />

        <CustomInput 
            placeholder='Password Repeat' 
            value={passwordRepeat} 
            setValue={setPasswordRepeat} 
            secureTextEntry={true}
        />

        <CustomButton 
            text="Submit" 
            OnPress = {onSubmitPress} 
            type="PRIMARY"
        />

        <CustomButton 
            text="Back to Sign In" 
            OnPress = {onSignUpPress} 
            type='TERTIARY'
        />



        
    </View>
    </ScrollView>
  )
}

const style = StyleSheet.create({
    root:{
        alignItems: 'center',
    },
    logo : {
        width: '100%',
        maxHeight: 300,
    },
    title:{
        fontSize: 24,
        fontWeight:'bold',
        color:'#051C60',
        margin:30,
        textAlign:'center'
    },
    link:{
        color:'#FDB075'
    },
    text:{
        color:'gray',
        marginVertical: 10

    }
})
export default ReSetPasswordScreen
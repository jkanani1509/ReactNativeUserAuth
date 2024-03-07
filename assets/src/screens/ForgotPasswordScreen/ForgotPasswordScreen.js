import { useState } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import Logo from '../../../../assets/images/logo.jpg'
import React from 'react'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButton from '../../components/SocialSignInButton';
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = () => {
    const [username, setUsername] = useState('');
    

    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const onSendPress =()=>{
        alert("ABABABABQQQQ");
    }
   
    const onSignInPress =()=>{
        console.warn('Sign In');
        navigation.navigate('SignIn');
    }

    const onReSendPress =()=>{
        alert("ABABABAB");
    }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={style.root} >
      {/* <Image source={Logo}  style={[style.logo]} resizeMode='contain' /> */}
  
    <Text style={style.title}>Forgot Password</Text>
        
        <CustomInput 
            placeholder="UseName" 
            value={setUsername} 
            setValue={setUsername} 
        />


        <CustomButton 
            text="SEND" 
            OnPress = {onSendPress} 
            type="PRIMARY"
        />

        
        <CustomButton 
            text="Resend Code" 
            OnPress = {onReSendPress} 
            type='TERTIARY'
        />

        <CustomButton 
            text="Back to Sign In" 
            OnPress = {onSignInPress} 
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
export default ForgotPasswordScreen
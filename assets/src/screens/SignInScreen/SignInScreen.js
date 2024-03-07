import { useState } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import {asyncStorage} from 'react-native'
import Logo from '../../../../assets/images/logo.jpg'
import React from 'react'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButton from '../../components/SocialSignInButton';
import axios from 'axios';

import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const onSignInPress = () => {
        // console.warn('Sign In');
        // alert(username,);

        axios.post(`http://192.168.0.108:8000/api/user/list`).then(response =>{
           alert("AAAAA");
        }).catch(e=>{alert('BBBBB');})

        // var APIURL = "http://10.0.2.2:3000/api/user/list";
        // var headers = {
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json',
        // };
        // var Data = {
        //     email: username,
        //     password: password
        // };

        // fetch(APIURL, {
        //     method: 'POST',
        //     headers: headers,
        //     body: JSON.stringify(Data)
        // }).then((response) => response.json())
        //     .then((response) => {
        //         alert(response[0].message);
        //     })
        //     .catch((error) => {
        //         alert("Error" + error);
        //     })

    }
   
    const onForgotPasswordPress =()=>{
        console.warn('Forgot Password');
        navigation.navigate('ForgotPassWord');
    }
   
    const onSignUpPress =()=>{
        console.warn('Sign Up');
        navigation.navigate('SignUp');
    }    
    
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={style.root} >
      <Image source={Logo}  style={[style.logo]} resizeMode='contain' />
  
        <CustomInput 
            placeholder="Username" 
            value={username} 
            setValue={setUsername} 
        />

        <CustomInput 
            placeholder='Password' 
            value={password} 
            setValue={setPassword} 
            secureTextEntry={true}
        />

        <CustomButton 
            text="Sign In" 
            OnPress = {onSignInPress} 
            type="PRIMARY"
        />

        <CustomButton 
            text="Forgot Password?" 
            OnPress = {onForgotPasswordPress} 
            type='TERTIARY'
        />

        <SocialSignInButton/>

        <CustomButton 
            text="Don't have an Account? Sign Up Here." 
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
        backgroundColor:'white',
    },
    logo : {
        width: '100%',
        padding:0,
        maxHeight: 300,
    }
})
export default SignInScreen
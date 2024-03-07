import { useState } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import Logo from '../../../../assets/images/logo.jpg'
import React from 'react'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButton from '../../components/SocialSignInButton';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [checkValidEmail, setCheckValidEmail] = useState(false);
    const [EmailValidError, setEmailValidError] = useState('');

    const {height} = useWindowDimensions();
    const Validator = require('validator');
    
    const navigation = useNavigation();

    const checkEmail_ABABABAB =(email)=>{
        if (Validator.isLength(String(email), { min: 2, max: 5 })) {
            setCheckValidEmail(false);
            setEmailValidError(' ');
        }   else {
            setCheckValidEmail(true);
            setEmailValidError('Name must be between 2 and 30 characters ');
          }
    }

    const checkEmailQQQQ =(email)=>{
        if (!Validator.isEmail(String(email))) {
            alert("BBBBB");
            setCheckValidEmail(false);
            setEmailValidError('');
            return false;
        } else {
            alert("CCCC");
            setCheckValidEmail(true);
            setEmailValidError('Pl. Enter Correct Email. ');
        }
        
       
    }
    const checkEmail = email => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

       
        if (email === "") {
            setCheckValidEmail(false);
            setEmailValidError('');
           
        } else {
            setCheckValidEmail(true);
            setEmailValidError('enter valid email address');
        }

        // alert("AHAHAHAH");
        
    }

    const onRegisterPress =()=>{
        alert(userName);
        navigation.navigate('SignUpConfirmScreen');
    }
  
    const onSignInPress =()=>{
        console.warn('Sign In');
        navigation.navigate('SignIn');
    }
    const onTermsUsePress = () =>{
        alert("AHAHAHA");
    }
    const onPrivacyPolicyPress = () => {
        alert("ATATATAT");
    }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={style.root} >
      {/* <Image source={Logo}  style={[style.logo]} resizeMode='contain' /> */}
  
    <Text style={style.title}>Create an Account</Text>
        <CustomInput 
            placeholder="Username" 
            value={userName} 
            setValue={setUserName} 
        />
       
            <CustomInput 
            placeholder="email" 
            value={email} 
            setValue={setEmail} 
            onBlur={checkEmail} 
        />
         {checkValidEmail ? (<Text style={style.errorMsg}>{EmailValidError}</Text>) : (<Text style={style. errorMsg}></Text>)}
        
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
            text="Register" 
            OnPress = {userRegister} 
            type="PRIMARY"
        />

        <Text style={style.text}>By Registering, you confirm that you are accpt our 
            <Text style={style.link} onPress={onTermsUsePress}> Terms of Use </Text>
             and <Text style={style.link} onPress={onPrivacyPolicyPress}>Privacy Policy </Text> </Text>

       

        <SocialSignInButton />

        <CustomButton 
            text="Already have an Account? Sign In Here." 
            OnPress = {onRegisterPress} 
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

    },
    errorMsg:{
        color:'red',
        fontSize:10,
        textAlign:'left'
    }
})
export default SignUpScreen
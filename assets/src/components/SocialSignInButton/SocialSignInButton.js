import { View, Text } from 'react-native'
import React from 'react'
import CustomInput from '../CustomInput/CustomInput';
import CustomButton from '../CustomButton/CustomButton';

const onSignInGoogle =()=>{
    alert("ABABABAB");
}
const onSignInFacebook =()=>{
    alert("ABABABAB");
}
const onSignInApple =()=>{
    alert("ABABABAB");
}


const SocialSignInButton = () => {
  return (
    <>
      <CustomButton 
            text="Sign In with Google" 
            OnPress = {onSignInGoogle} 
            bgColor="#FAE9EA"
            fgColor="#DD4D44"
        />
        <CustomButton 
            text="Sign In with Facebook" 
            OnPress = {onSignInFacebook} 
            type="PRIMARY"
            bgColor="#F7EAF4"
            fgColor="#4765A9"
        />
        <CustomButton 
            text="Sign In with Apple" 
            OnPress = {onSignInApple} 
            type="PRIMARY"
            bgColor="#e3e3e3"
            fgColor="#363636"
        />
    </>
  )
}

export default SocialSignInButton
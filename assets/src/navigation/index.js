import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignInScreen         from '../screens/SignInScreen';
import SignUpScreen         from '../screens/SignUpScreen';
import SignUpConfirmScreen  from '../screens/SignUpConfirmScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import HomeScreen           from '../screens/HomeScreen';
import ReSetPassword        from '../screens/ReSetPasswordScreen';
import ReSetPasswordScreen from '../screens/ReSetPasswordScreen';


const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="SignIn" component={SignInScreen}/>
            <Stack.Screen name="SignUp" component={SignUpScreen}/>
            <Stack.Screen name="SignUpConfirm" component={SignUpConfirmScreen}/>
            <Stack.Screen name="ForgotPassWord" component={ForgotPasswordScreen}/>
            <Stack.Screen name="SignUpConfirmScreen" component={SignUpConfirmScreen}/>
            <Stack.Screen name="ReSetPasswordScreen" component={ReSetPasswordScreen}/>
            <Stack.Screen name="Home" component={HomeScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: '#F9FBFC',
      padding: 15
      // alignItems: 'center',
    },
  });
export default Navigation
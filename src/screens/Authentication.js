import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './Login'
import Signup from './Signup'
import AuthLoading from './AuthLoading'

const AuthStack = createStackNavigator()

const Authentication = (props) => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="SignIn" component={Login} props={props} />
      <AuthStack.Screen name="SignUp" component={Signup} props={props} />
      <AuthStack.Screen name="AuthLoading" component={AuthLoading} />
    </AuthStack.Navigator>
  )
}

export default Authentication

const styles = StyleSheet.create({})

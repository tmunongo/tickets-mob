import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Constants from 'expo-constants'
import Loading from '../components/Loading'
import * as SecureStore from 'expo-secure-store'

const AuthLoading = (props) => {
  const checkLoginState = async () => {
    //retrieve token value
    const userToken = await SecureStore.getItemAsync('token')
  }
  useEffect(() => {
    checkLoginState()
  })
  return (
    // <View style={styles.container}>
    <Loading />
    // </View>
  )
}

export default AuthLoading

const styles = StyleSheet.create({
  container: {
    top: Constants.statusBarHeight,
  },
})

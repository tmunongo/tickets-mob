import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'

const MeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Me</Text>
    </View>
  )
}

export default MeScreen

const styles = StyleSheet.create({
  container: {
    top: Constants.statusBarHeight,
  }
})
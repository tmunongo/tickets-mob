import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'

const MyTicketsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>MyTicketsScreen</Text>
    </View>
  )
}

export default MyTicketsScreen

const styles = StyleSheet.create({
  container: {
    top: Constants.statusBarHeight,
  },
})

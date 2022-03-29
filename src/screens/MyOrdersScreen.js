import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'

const MyOrdersScreen = () => {
  return (
    <View style={styles.container}>
      <Text>MyOrdersScreen</Text>
    </View>
  )
}

export default MyOrdersScreen

const styles = StyleSheet.create({
  container: {
    top: Constants.statusBarHeight,
  },
})

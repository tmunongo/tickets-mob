import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'

const MeScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>Me</Text>
      <Button title="Sign Out" />
    </View>
  )
}

MeScreen.navigationOptions = {
  title: 'Profile',
}

export default MeScreen

const styles = StyleSheet.create({
  container: {
    // top: Constants.statusBarHeight,
  },
})

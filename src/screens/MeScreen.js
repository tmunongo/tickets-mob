import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'
import * as SecureStore from 'expo-secure-store'
import { AuthContext } from '../components/context'

const MeScreen = (props) => {
  const { signOut } = React.useContext(AuthContext)

  return (
    <View style={styles.container}>
      <Text>Me</Text>
      <Button title="Sign Out" onPress={signOut} />
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

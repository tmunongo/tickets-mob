import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'
import * as SecureStore from 'expo-secure-store'
import { AuthContext } from '../components/context'

const Login = (props) => {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  // const login = () => {
  //   SecureStore.setItemAsync('userToken', 'abc')
  // }

  // const storeToken = () => {
  //   SecureStore.setItemAsync('token', 'abc').then(
  //     props.navigation.
  //   )
  // }
  const { signIn } = React.useContext(AuthContext)

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={signIn} />
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    top: Constants.statusBarHeight,
  },
})

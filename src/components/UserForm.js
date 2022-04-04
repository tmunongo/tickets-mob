import React, { useState } from 'react'
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import Constants from 'expo-constants'

const UserForm = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    props.action({
      variables: {
        username: username,
        email: email,
        password: password,
      },
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email</Text>
      <TextInput
        onChangeText={(text) => setEmail(text)}
        value={email}
        textContentType="emailAddress"
        autoFocus={true}
        autoCapitalize="none"
        style={styles.box}
      />
      {props.formType === 'signUp' && (
        <View>
          <Text style={styles.label}>Username</Text>
          <TextInput
            onChangeText={(text) => setUsername(text)}
            value={username}
            textContentType="username"
            autoCapitalize="none"
            style={styles.box}
          />
        </View>
      )}
      <Text style={styles.label}>Password</Text>
      <TextInput
        onChangeText={(text) => setPassword(text)}
        value={password}
        textContentType="password"
        secureTextEntry={true}
        style={styles.box}
      />
      <Button
        title="Submit"
        onPress={handleSubmit}
        navigation={props.navigation}
        style={styles.button}
      />
      {props.formType !== 'signUp' && (
        <>
          <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
            <Text style={{ paddingTop: 5 }}>
              No Account? Touch this to fix that 😊
            </Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  )
}

export default UserForm

const styles = StyleSheet.create({
  container: {
    top: Constants.statusBarHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  box: {
    borderWidth: 1,
    borderColor: 'black',
    width: 240,
    marginBottom: 10,
  },
  button: {
    paddingTop: 5,
  },
})

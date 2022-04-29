import React, { useState } from 'react'
import {
  Button,
  KeyboardAvoidingView,
  Platform,
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
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Text style={styles.label}>Email</Text>
      <TextInput
        onChangeText={(text) => setEmail(text)}
        value={email}
        textContentType="emailAddress"
        autoFocus={true}
        autoCapitalize="none"
        placeholder={'Email Address'}
        style={styles.box}
      />
      {props.formType === 'signUp' && (
        <View>
          <Text style={styles.label}>Username</Text>
          <TextInput
            autoCapitalize="none"
            onChangeText={(text) => setUsername(text)}
            placeholder={'Username'}
            textContentType="username"
            style={styles.box}
            value={username}
          />
        </View>
      )}
      <Text style={styles.label}>Password</Text>
      <TextInput
        onChangeText={(text) => setPassword(text)}
        placeholder={'Password'}
        secureTextEntry={true}
        style={styles.box}
        textContentType="password"
        value={password}
      />
      <TouchableOpacity
        onPress={handleSubmit}
        navigation={props.navigation}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      {props.formType === 'signIn' && (
        <>
          <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
            <Text style={{ paddingTop: 5, marginTop: 10 }}>
              No Account? Touch this to fix that 😊
            </Text>
          </TouchableOpacity>
        </>
      )}
      {props.formType === 'signUp' && (
        <>
          <TouchableOpacity onPress={() => props.navigation.navigate('SignIn')}>
            <Text style={{ paddingTop: 5, marginTop: 10 }}>Sign In 👤</Text>
          </TouchableOpacity>
        </>
      )}
    </KeyboardAvoidingView>
  )
}

export default UserForm

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderColor: 'black',
    borderRadius: 30,
    borderWidth: 2,
    flex: 1,
    justifyContent: 'center',
    margin: 30,
    marginBottom: 160,
    marginTop: 100,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  box: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    width: 240,
    marginBottom: 10,
    paddingLeft: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#7FDEDB',
    borderColor: 'black',
    borderRadius: 30,
    borderWidth: 2,
    height: 30,
    padding: 5,
    width: 80,
  },
  buttonText: {
    fontWeight: 'bold',
  },
})

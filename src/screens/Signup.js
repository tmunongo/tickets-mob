import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { gql, useMutation } from '@apollo/client'
import { AuthContext } from '../components/Context'
import Loading from '../components/Loading'
import UserForm from '../components/UserForm'
import * as SecureStore from 'expo-secure-store'

const Signup = (props) => {
  const { aUser } = React.useContext(AuthContext)

  const SIGNUP_USER = gql`
    mutation signUp($username: String!, $email: String!, $password: String!) {
      signUp(username: $username, email: $email, password: $password)
    }
  `

  const [signUp, { loading, error }] = useMutation(SIGNUP_USER, {
    onCompleted: (data) => {
      SecureStore.setItemAsync('userToken', data.signUp)
      aUser(data.signUp)
    },
  })

  //   if (loading) return <Loading />
  if (error)
    alert(error.message + ' - Username or Email may be invalid or taken.')
  return (
    <UserForm
      action={signUp}
      formType="signUp"
      props={props}
      navigation={props.navigation}
    />
  )
}

export default Signup

const styles = StyleSheet.create({})

import { StyleSheet } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'
import * as SecureStore from 'expo-secure-store'
import { AuthContext } from '../components/Context'
import { gql, useMutation } from '@apollo/client'
import Loading from '../components/Loading'
import UserForm from '../components/UserForm'

const Login = (props) => {
  const { aUser } = React.useContext(AuthContext)

  const SIGNIN_USER = gql`
    mutation signIn($email: String!, $password: String!) {
      signIn(email: $email, password: $password)
    }
  `
  const [signIn, { loading, error }] = useMutation(SIGNIN_USER, {
    onCompleted: (data) => {
      SecureStore.setItemAsync('userToken', data.signIn)
      aUser(data.signIn)
    },
  })

  if (loading) return <Loading />
  if (error) alert(error.message)
  return (
    <UserForm action={signIn} formType="signIn" navigation={props.navigation} />
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    top: Constants.statusBarHeight,
  },
})

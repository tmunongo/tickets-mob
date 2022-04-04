import { Text, StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import Screens from './screens'
import getEnvVars from '../config'
const { apiURI } = getEnvVars()
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from '@apollo/client'
import { AuthContext, useAuthentication } from './components/Context'
import { setContext } from '@apollo/client/link/context'
import * as SecureStore from 'expo-secure-store'
// const [context] = React.useState(AuthContext)

const link = new HttpLink({
  uri: 'http://192.168.1.104:8080/tickets-api',
})

const authLink = setContext(async (_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: (await SecureStore.getItemAsync('userToken')) || '',
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(link),
  cache: new InMemoryCache(),
})

const Main = () => {
  return (
    <ApolloProvider client={client}>
      {/* <AuthContext.Provider value={initialLoginState}> */}
      <Screens />
      {/* </AuthContext.Provider> */}
    </ApolloProvider>
  )
}

export default Main

const styles = StyleSheet.create({})

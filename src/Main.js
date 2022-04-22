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
import { StripeProvider } from '@stripe/stripe-react-native'
// const [context] = React.useState(AuthContext)

const link = new HttpLink({
  uri: 'http://192.168.1.102:8080/tickets-api',
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
      <StripeProvider publishableKey="pk_test_51IKDloF4MRVfci29tfbWsKJOVFVpnYjhk10CIK4I9yAj0Iw0a2uiUfXCmRbIIKwiAZeHX5U3YscMwcOKFwNKKHcB00ZcTiH5v7">
        <Screens />
      </StripeProvider>
      {/* </AuthContext.Provider> */}
    </ApolloProvider>
  )
}

export default Main

const styles = StyleSheet.create({})

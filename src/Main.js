import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { StripeProvider } from '@stripe/stripe-react-native'
import * as SecureStore from 'expo-secure-store'
import React from 'react'
import { StyleSheet } from 'react-native'
import getEnvVars from '../config'
import Screens from './screens'
const { STRIPE_PUBLISHABLE_KEY } = getEnvVars()

const link = new HttpLink({
  uri: 'http://192.168.1.193:8008/tickets-api',
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
      <StripeProvider publishableKey={STRIPE_PUBLISHABLE_KEY}>
        <Screens />
      </StripeProvider>
    </ApolloProvider>
  )
}

export default Main

const styles = StyleSheet.create({})

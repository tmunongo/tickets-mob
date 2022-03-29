import { Text, StyleSheet, View } from 'react-native'
import React from 'react'
import Screens from './screens'
import getEnvVars from '../config'
const { apiURI } = getEnvVars()
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import * as SecureStore from 'expo-secure-store'

const client = new ApolloClient({
  uri: 'http://192.168.1.115:8080/tickets-api',
  cache: new InMemoryCache(),
})

const Main = () => {
  return (
    <ApolloProvider client={client}>
      <Screens />
    </ApolloProvider>
  )
}

export default Main

const styles = StyleSheet.create({})

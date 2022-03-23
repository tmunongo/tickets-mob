import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'
import { useQuery } from '@apollo/client'
import Loading from '../components/Loading'
import { GET_LOCATIONS } from '../gql/query'

const locations = ({ route, navigation }) => {
  const { id, others } = route.params

  const { data, loading, error } = useQuery(GET_LOCATIONS, {
    variables: { id },
  })

  if (loading) return <Loading />
  if (error) {
    return (
      <View style={styles.container}>
        <Text>{error.message}</Text>
      </View>
    )
  }
  if (data) {
    return (
      <View style={styles.container}>
        <Text>This movie is showing at: {data.id}</Text>
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <Text>
          This movie is presently not showing at any cinemas in your area
        </Text>
      </View>
    )
  }
}

export default locations

const styles = StyleSheet.create({
  container: {
    top: Constants.statusBarHeight,
  },
})

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'
import { useQuery } from '@apollo/client'
import Loading from '../components/Loading'
import { GET_LOCATIONS } from '../gql/query'
import TheaterFeed from '../components/TheaterFeed'

const locations = ({ route, navigation }) => {
  const { id, others } = route.params

  const { data, loading, error } = useQuery(GET_LOCATIONS, {
    variables: { movieId: id },
  })
  if (loading) return <Loading />
  if (error) {
    return (
      <View style={styles.container}>
        <Text>{error.message}</Text>
      </View>
    )
  }
  if (data && data.locations.length !== 0) {
    return (
      <View style={styles.container}>
        <TheaterFeed locations={data} navigation={navigation} movieId={id} />
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
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
  message: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})

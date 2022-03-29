import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'
import { useQuery } from '@apollo/client'
import { GET_CATALOG } from '../gql/query'
import Loading from '../components/Loading'

const CatalogScreen = ({ route, navigation }) => {
  const { id, other } = route.params
  const { loading, error, data } = useQuery(GET_CATALOG, {
    variables: { theaterId: id },
  })
  if (loading) return <Loading />
  if (error)
    return (
      <View style={styles.container}>
        <Text>{error.message}</Text>
      </View>
    )
  return (
    <View style={styles.container}>
      <Text>The movies showing: {data.catalog[0].title} </Text>
    </View>
  )
}

export default CatalogScreen

const styles = StyleSheet.create({
  container: {
    top: Constants.statusBarHeight,
  },
})

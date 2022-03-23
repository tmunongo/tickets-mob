import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'

const MovieScreen = ({ route, navigation }) => {
  const { id, others } = route.params
  return (
    <View style={styles.container}>
      <Text>This is movie: {id}</Text>
    </View>
  )
}

export default MovieScreen

const styles = StyleSheet.create({
  container: {
    top: Constants.statusBarHeight,
  },
})

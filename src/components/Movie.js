import { StyleSheet, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'

const Movie = ({ movie }) => {
  return (
    <ScrollView style={styles.feed}>
      <Image style={styles.poster} source={{ uri: movie.poster }} />
      <Text style={styles.title}>{movie.title}</Text>
    </ScrollView>
  )
}

export default Movie

const styles = StyleSheet.create({
  movieView: {
    top: Constants.statusBarHeight,
  },
  poster: {
    height: 170,
    width: 100,
    alignSelf: 'center',
  },
  feed: {
    height: 200,
    display: 'flex',
  },
  title: {
    marginLeft: 25,
    color: 'white',
    alignSelf: 'center',
  },
})

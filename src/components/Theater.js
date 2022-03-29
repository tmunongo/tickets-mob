import { StyleSheet, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'

const Movie = ({ theater }) => {
  //console.log(theater)
  return (
    <ScrollView style={styles.feed}>
      <Text style={styles.title}>{theater.username}</Text>
      <Text style={styles.subtitle}>Address goes here</Text>
      <Text style={styles.subtitle}>Phone Number goes here</Text>
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
    height: 100,
    overflow: 'hidden',
    marginBottom: 5,
    backgroundColor: 'black',
    borderBottomColor: 'grey',
    borderBottomWidth: 3,
  },
  title: {
    color: 'white',
    fontSize: 20,
    textTransform: 'capitalize',
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'white',
  },
})

import { StyleSheet, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'

const Movie = ({ theater }) => {
  return (
    <ScrollView style={styles.feed}>
      <Text style={styles.title}>Cinema: {theater.fullName}</Text>
      <Text style={styles.subtitle}>Address: {theater.address}</Text>
      <Text style={styles.subtitle}>Contact: {theater.phoneNumber}</Text>
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
    backgroundColor: 'bisque',
    borderBottomColor: 'grey',
    borderBottomWidth: 3,
    height: 100,
    marginBottom: 5,
    marginLeft: 15,
    marginRight: 15,
    padding: 15,
    overflow: 'hidden',
  },
  title: {
    color: 'black',
    fontSize: 20,
    textTransform: 'capitalize',
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'black',
    fontSize: 16,
  },
})

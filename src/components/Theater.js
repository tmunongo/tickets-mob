import { StyleSheet, Text, ScrollView, Image, View } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'
import Separator from './Separator'

const Movie = ({ theater }) => {
  return (
    <ScrollView style={styles.feed}>
      <Text style={styles.title}>{theater.fullName}</Text>
      <Separator />
      <View style={styles.meta}>
        <Text style={styles.subtitle}>{theater.address}</Text>
        <Text style={styles.subtitle}>{theater.phoneNumber}</Text>
      </View>
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
    backgroundColor: 'black',
    borderBottomColor: 'grey',
    borderBottomWidth: 3,
    borderRadius: 10,
    shadowColor: 'white',
    elevation: 5,
    margin: 5,
    padding: 10,
    paddingLeft: 5,
    paddingRight: 5,
    overflow: 'hidden',
  },
  meta: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  title: {
    borderWidth: 2,
    borderRadius: 0,
    color: 'white',
    fontFamily: 'monospace',
    fontSize: 20,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingTop: 5,
    textTransform: 'capitalize',
    fontWeight: 'bold',
  },
  subtitle: {
    borderWidth: 2,
    borderRadius: 5,
    color: 'white',
    fontFamily: 'monospace',
    fontSize: 16,
    flex: 0,
    marginLeft: 10,
    paddingBottom: 5,
    paddingLeft: 6,
    paddingTop: 5,
    width: 'auto',
  },
})

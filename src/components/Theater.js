import { StyleSheet, Text, ScrollView, Image, View } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'

const Movie = ({ theater }) => {
  return (
    <ScrollView style={styles.feed}>
      <Text style={styles.title}>Cinema: {theater.fullName}</Text>
      <View style={styles.meta}>
        <Text style={styles.subtitle}>Address: {theater.address}</Text>
        <Text style={styles.subtitle}>Contact: {theater.phoneNumber}</Text>
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
    marginBottom: 5,
    padding: 10,
    paddingLeft: 3,
    paddingRight: 3,
    overflow: 'hidden',
  },
  meta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    borderColor: 'black',
    borderTopColor: '#10AA15',
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
    borderColor: 'black',
    borderTopColor: '#10AA15',
    borderWidth: 2,
    borderRadius: 0,
    color: 'white',
    fontFamily: 'monospace',
    fontSize: 16,
    flex: 0,
    marginTop: 5,
    paddingBottom: 5,
    paddingLeft: 6,
    paddingTop: 5,
    width: 190,
  },
})

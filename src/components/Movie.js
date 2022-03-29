import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  View,
} from 'react-native'
import React from 'react'
import Constants from 'expo-constants'

const Movie = (params) => {
  const poster = { uri: params.movie.poster }
  return (
    <ScrollView style={styles.feed}>
      <ImageBackground
        resizeMode="cover"
        source={poster}
        style={styles.background}
      >
        <Image style={styles.poster} source={poster} />
      </ImageBackground>
      <Text style={styles.title}>{params.movie.title}</Text>
      <Text style={styles.title}>Showing at: {params.locationId}</Text>
    </ScrollView>
  )
}

export default Movie

const styles = StyleSheet.create({
  movieView: {
    top: Constants.statusBarHeight,
    flex: 1,
  },
  background: {
    justifyContent: 'center',
    flex: 1,
    height: 300,
  },
  poster: {
    height: 170,
    width: 100,
    alignSelf: 'center',
  },
  feed: {
    height: 400,
    display: 'flex',
  },
  title: {
    marginLeft: 25,
    color: 'black',
    alignSelf: 'center',
  },
})

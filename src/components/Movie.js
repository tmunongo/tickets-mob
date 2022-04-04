import {
  Dimensions,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  View,
} from 'react-native'
import React from 'react'
import Constants from 'expo-constants'
import OrderForm from './OrderForm'

const Movie = (params) => {
  return (
    <View style={styles.feed}>
      <ImageBackground
        resizeMode="cover"
        source={{ uri: params.movie.poster }}
        style={styles.background}
      >
        <Image style={styles.poster} source={{ uri: params.movie.poster }} />
        <OrderForm movie={params.movie} location={params.location} />
      </ImageBackground>
    </View>
  )
}

export default Movie

const styles = StyleSheet.create({
  movieView: {
    top: Constants.statusBarHeight,
    flex: 1,
  },
  background: {
    backgroundColor: 'grey',
    justifyContent: 'center',
    flex: 1,
    height: Dimensions.get('window').height / 2,
  },
  poster: {
    height: 170,
    width: 100,
    alignSelf: 'center',
  },
  feed: {
    height: Dimensions.get('window').height - 50,
    display: 'flex',
  },
  title: {
    marginLeft: 25,
    color: 'black',
    alignSelf: 'center',
  },
})

import {
  Dimensions,
  StyleSheet,
  Image,
  ImageBackground,
  View,
} from 'react-native'
import React from 'react'
import Constants from 'expo-constants'
import OrderForm from './OrderForm'
import { gql, useMutation } from '@apollo/client'
import Loading from './Loading'

const Movie = (props) => {
  const NEW_ORDER = gql`
    mutation Mutation(
      $locationId: ID!
      $movieId: ID!
      $screeningTime: String!
      $screeningDay: Date
      $quality: String!
    ) {
      newOrder(
        locationId: $locationId
        movieId: $movieId
        screeningTime: $screeningTime
        screeningDay: $screeningDay
        quality: $quality
      ) {
        id
        orderedBy {
          id
          username
        }
        toWatch {
          id
          title
          year
        }
        location {
          username
          id
        }
        screeningTime
        screeningDay
        quality
      }
    }
  `

  const [newOrder, { loading, error }] = useMutation(NEW_ORDER, {
    onCompleted: (data) => {
      props.navigation.navigate('SessionCreator', {
        data: data,
      })
    },
  })
  if (loading) return <Loading />
  if (error) alert(error.message)
  return (
    <View style={styles.feed}>
      <ImageBackground
        resizeMode="cover"
        source={{ uri: props.movie.poster }}
        style={styles.background}
      >
        <Image style={styles.poster} source={{ uri: props.movie.poster }} />
        <OrderForm
          action={newOrder}
          formType="order"
          navigation={props.navigation}
          movie={props.movie}
          location={props.location}
        />
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
    backgroundColor: 'white',
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

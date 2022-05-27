import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { gql, useMutation } from '@apollo/client'
// import { SessionContext } from '../components/Context'
import SessionForm from '../components/SessionForm'

const SessionCreator = (props) => {
  const RETRIEVE_SESSION = gql`
    mutation retrieveSession(
      $movieId: ID!
      $quality: String!
      $screeningDay: Date!
      $screeningTime: String!
      $locationId: ID!
    ) {
      retrieveSession(
        movieId: $movieId
        quality: $quality
        screeningDay: $screeningDay
        screeningTime: $screeningTime
        locationId: $locationId
      ) {
        id
        location {
          id
          username
          fullName
          address
        }
        movie {
          title
          year
          id
          rating
        }
        screeningDay
        screeningTime
        quality
        seatsAvailable
        seatMap
        selectedSeats
      }
    }
  `

  const orderDetails = props.route.params.data.newOrder

  const [retrieveSession, { error, loading }] = useMutation(RETRIEVE_SESSION, {
    onCompleted: (data) => {
      props.navigation.navigate('SeatSelector', {
        params: data.retrieveSession,
      })
    },
  })
  if (error) console.log('error: ', error.message)
  return (
    <SessionForm
      action={retrieveSession}
      params={orderDetails}
      navigation={props.navigation}
    />
  )
}

export default SessionCreator

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})

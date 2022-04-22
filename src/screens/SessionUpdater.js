import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Loading from '../components/Loading'
import { gql, useMutation } from '@apollo/client'
import Reservation from '../components/Reservation'

const SessionUpdater = (props) => {
  console.log('session updater: ', props)
  const reservation = props.route.params.data

  const UPDATE_SESSION = gql`
    mutation Mutation(
      $sessionId: ID!
      $seatsAvailable: Int
      $selectedSeats: [String]
    ) {
      updateSession(
        sessionId: $sessionId
        seatsAvailable: $seatsAvailable
        selectedSeats: $selectedSeats
      ) {
        id
        location {
          username
        }
        movie {
          title
          year
        }
        selectedSeats
        seatMap
        seatsAvailable
        quality
        screeningTime
        screeningDay
      }
    }
  `
  const [updateSession, { loading, error }] = useMutation(UPDATE_SESSION, {
    onCompleted: (data) => {
      props.navigation.navigate('Reservation', {
        session: data.updateSession,
        reservation: reservation,
      })
    },
  })
  React.useEffect(() => {
    updateSession({
      variables: {
        sessionId: props.route.params.params.orderDetails.id,
        selectedSeats: props.route.params.data.seat,
        seatsAvailable:
          props.route.params.params.orderDetails.seatsAvailable -
          props.route.params.data.seat.length,
      },
    })
  }, [])
  if (loading) return <Loading />
  if (error) alert(`An error has occured ${error.message}`)
  return <Loading />
}

export default SessionUpdater

const styles = StyleSheet.create({})

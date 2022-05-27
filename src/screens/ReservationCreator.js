import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { gql, useMutation } from '@apollo/client'
import Loading from '../components/Loading'
import { CURRENT_USER } from '../gql/query'

const ReservationCreator = (props) => {
  const params = props.route.params.params
  const NEW_RESERVATION = gql`
    mutation newReservation(
      $sessionId: ID!
      $totalPrice: Int!
      $seatSelected: [String]
    ) {
      newReservation(
        sessionId: $sessionId
        totalPrice: $totalPrice
        seatSelected: $seatSelected
      ) {
        reservedBy {
          username
        }
        seat
        sessionDetails {
          location {
            fullName
          }
          movie {
            title
            year
          }
          screeningDay
          screeningTime
          quality
        }
        totalPrice
        confirmationCode
        id
      }
    }
  `

  const [newReservation, { loading, error }] = useMutation(NEW_RESERVATION, {
    refetchQueries: [{ query: CURRENT_USER }, { query: CURRENT_USER }],
    onCompleted: (data) => {
      props.navigation.navigate('SessionUpdater', {
        data: data.newReservation,
        params: params,
      })
    },
  })
  React.useEffect(() => {
    newReservation({
      variables: {
        sessionId: params.orderDetails.id,
        seatSelected: params.mySeats,
        totalPrice: params.total,
      },
    })
  }, [])
  if (loading) <Loading />
  if (error) alert(`An error has occured ${error.message}`)
  //   })
  return (
    <View>
      <Loading />
      {/* <ReservationForm
        action={newReservation}
        params={params}
        navigation={props.navigation}
      /> */}
    </View>
  )
}

export default ReservationCreator

const styles = StyleSheet.create({})

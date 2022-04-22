import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'

const ReservationForm = (props) => {
  // console.log('reservation form: ', props)
  const handleReserve = () => {
    props.action({
      variables: {
        sessionId: props.params.orderDetails.id,
        seatSelected: props.params.mySeats,
        totalPrice: props.params.total,
      },
    })
  }
  return (
    <View>
      <Button title="confirm reservation" onPress={(e) => handleReserve(e)} />
    </View>
  )
}

export default ReservationForm

const styles = StyleSheet.create({
  container: {
    top: Constants.statusBarHeight,
  },
  orderButton: {
    justifyContent: 'center',
    width: 50,
  },
})

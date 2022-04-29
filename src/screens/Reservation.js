import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Loading from '../components/Loading'
import Constants from 'expo-constants'
import Separator from '../components/Separator'

const Reservation = (props) => {
  const details = props.route.params.session
  const res = props.route.params.reservation
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  let date = new Date(details.screeningDay).toLocaleDateString(
    undefined,
    options
  )
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Reservation</Text>
      <Separator />
      <Text style={styles.label}>Your confirmation code is </Text>
      <Text style={styles.code}>- {res.confirmationCode} -</Text>
      <Separator />
      <Text style={styles.label}>
        Ticket Holder: @{res.reservedBy.username}
      </Text>
      <Separator />
      <Text style={styles.label}>
        Seats: {res.seat[0]}, {res.seat[1]}
      </Text>
      <Separator />
      <Text style={styles.label}>
        Movie: {details.movie.title}, Year: {details.movie.year}
      </Text>
      <Separator />
      <Text style={styles.label}>Location: {details.location.username}</Text>
      <Separator />
      <Text style={styles.label}>Quality: {details.quality}</Text>
      <Separator />
      <Text style={styles.label}>Screening Day: {date}</Text>
      <Separator />
      <Text style={styles.label}>
        Show Time: <Text>{details.screeningTime}</Text>
      </Text>
      <Separator />
      <Text style={styles.message}>
        Thank you for ordering. You may return home and continue browsing.
      </Text>
      <Text style={styles.message}>
        Please show this ticket to be directed to a screening room.
      </Text>
    </View>
  )
}

export default Reservation

const styles = StyleSheet.create({
  code: {
    color: 'white',
    fontFamily: 'monospace',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    backgroundColor: 'black',
    flex: 0,
    height: Dimensions.get('screen').height,
    top: Constants.statusBarHeight,
    justifyContent: 'center',
    padding: 10,
  },
  label: {
    color: 'white',
    fontFamily: 'monospace',
    fontSize: 18,
    textAlign: 'center',
  },
  message: {
    color: 'white',
    textAlign: 'center',
  },
  title: {
    color: 'white',
    fontFamily: 'monospace',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
})

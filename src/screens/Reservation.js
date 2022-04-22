import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Loading from '../components/Loading'
import Constants from 'expo-constants'
import Separator from '../components/Separator'

const Reservation = (props) => {
  console.log('reservation:', props)
  const details = props.route.params.session
  const res = props.route.params.reservation
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Reservation</Text>
      <Separator />
      <Text style={styles.label}>Your confirmation code is </Text>
      <Text style={styles.code}>- {res.confirmationCode} -</Text>
      <Separator />
      <Text style={styles.label}>Ticket Holder: {res.reservedBy.username}</Text>
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
      <Text style={styles.label}>Screening Day: {details.screeningDay}</Text>
      <Separator />
      <Text style={styles.label}>
        Show Time: <Text>{details.screeningTime}</Text>
      </Text>
      <Separator />
      <Text>Please show this ticket to be directed to a screening room</Text>
    </View>
  )
}

export default Reservation

const styles = StyleSheet.create({
  code: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    flex: 0,
    top: Constants.statusBarHeight,
    justifyContent: 'center',
    margin: 10,
  },
  label: {
    textAlign: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
})

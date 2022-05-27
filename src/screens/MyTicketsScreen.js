import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import React, { useState } from 'react'
import Constants from 'expo-constants'
import ReservationFeed from '../components/ReservationFeed'

const MyTicketsScreen = (props) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>My Tickets 🎟️</Text>
      {props.route.params.reservations.length === 0 ? (
        <Text>You have no tickets yet</Text>
      ) : (
        <ReservationFeed
          reservations={props.route.params.reservations}
          navigation={props.navigation}
        />
      )}
    </ScrollView>
  )
}

export default MyTicketsScreen

const styles = StyleSheet.create({
  container: {
    top: Constants.statusBarHeight,
  },
  header: {
    borderTopColor: 'white',
    borderTopWidth: 2,
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    flex: 0,
    fontFamily: 'monospace',
    fontSize: 22,
    fontWeight: 'bold',
    paddingBottom: 5,
    paddingTop: 5,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
})

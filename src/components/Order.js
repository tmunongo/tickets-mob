import { StyleSheet, Text, ScrollView } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'

const Order = ({ order }) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  let date = new Date(order.screeningDay).toLocaleDateString(undefined, options)
  return (
    <ScrollView style={styles.feed}>
      <Text style={styles.title}>{order.toWatch.title}</Text>
      <Text style={styles.subtitle}>{order.toWatch.rating}</Text>
      <Text style={styles.subtitle}>{date}</Text>
      <Text style={styles.subtitle}>{order.screeningTime}</Text>
      <Text style={styles.subtitle}>{order.quality}</Text>
    </ScrollView>
  )
}

export default Order

const styles = StyleSheet.create({
  movieView: {
    top: Constants.statusBarHeight,
  },
  poster: {
    height: 170,
    width: 100,
    alignSelf: 'center',
  },
  feed: {
    height: 100,
    overflow: 'hidden',
    marginBottom: 5,
    backgroundColor: 'black',
    borderBottomColor: 'grey',
    borderBottomWidth: 3,
  },
  title: {
    color: 'white',
    fontSize: 20,
    textTransform: 'capitalize',
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'white',
  },
})

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Seat = (props) => {
  return (
    <View>
      <Text style={styles.seat}>{props.seat}</Text>
    </View>
  )
}

export default Seat

const styles = StyleSheet.create({
  seat: {
    height: 50,
    marginRight: 10,
  },
})

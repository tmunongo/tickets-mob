import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'

const SessionForm = (props) => {
  const handleSession = () => {
    props.action({
      variables: {
        movieId: props.params.toWatch.id,
        quality: props.params.quality,
        screeningDay: props.params.screeningDay,
        screeningTime: props.params.screeningTime,
        locationId: props.params.location.id,
      },
    })
  }
  return (
    <View>
      <Button
        style={styles.orderButton}
        title="Tap To Continue"
        onPress={handleSession}
      />
    </View>
  )
}

export default SessionForm

const styles = StyleSheet.create({
  container: {
    top: Constants.statusBarHeight,
  },
  orderButton: {
    justifyContent: 'center',
    width: 50,
  },
})

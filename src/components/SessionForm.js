import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Constants from 'expo-constants'

const SessionForm = (props) => {
  useEffect(() => {
    handleSession()
  }, [])

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
      <ActivityIndicator />
      <Text style={styles.textLoading}>Session Loading</Text>
    </View>
  )
}

export default SessionForm

const styles = StyleSheet.create({
  container: {
    top: Constants.statusBarHeight,
  },
  textLoading: {
    justifyContent: 'center',
    textAlign: 'center',
  },
})

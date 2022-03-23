import { StyleSheet, ActivityIndicator, Text, View } from 'react-native'
import React from 'react'

const Loading = () => {
  return (
    <View style={styles.wrap}>
      <ActivityIndicator size="large" />
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

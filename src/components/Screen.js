import { Text, SafeAreaView, StyleSheet, View, Button } from 'react-native'
import React, { Component } from 'react'
import Constants from 'expo-constants'

const Separator = () => <View style={styles.separator} />

export default class Screen extends Component {
  render() {
    return <View style={styles.container}>{children}</View>
  }
}

const styles = StyleSheet.create({
  container: {
    top: Constants.statusBarHeight,
    backgroundColor: 'grey',
  },
})

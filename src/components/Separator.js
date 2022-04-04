import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Separator = () => {
  return <View style={styles.separator} />
}

export default Separator

const styles = StyleSheet.create({
  separator: {
    marginVertical: 8,
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginLeft: 15,
    marginRight: 15,
  },
})

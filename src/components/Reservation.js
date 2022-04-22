import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import React from 'react'

const Reservation = (props) => {
  const [refreshing, setRefreshing] = React.useState(false)
  console.log('res', props)
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={props.refetch} />
      }
    >
      <Text>{props.params.id}</Text>
      <Text>{props.params.selectedSeats}</Text>
    </ScrollView>
  )
}

export default Reservation

const styles = StyleSheet.create({})

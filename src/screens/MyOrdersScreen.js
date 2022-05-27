import { RefreshControl, StyleSheet, Text, ScrollView } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'
import OrderFeed from '../components/OrderFeed'

const MyOrdersScreen = (props) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>My Orders</Text>
      {props.route.params.orders.length === 0 ? (
        <Text>You have no orders yet</Text>
      ) : (
        <OrderFeed
          orders={props.route.params.orders}
          navigation={props.navigation}
        />
      )}
    </ScrollView>
  )
}

export default MyOrdersScreen

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

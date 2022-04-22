import { RefreshControl, StyleSheet, Text, ScrollView } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'
import { gql, useQuery } from '@apollo/client'
import Loading from '../components/Loading'
import { MY_ORDERS } from '../gql/query'
import OrderFeed from '../components/OrderFeed'

const MyOrdersScreen = (props) => {
  const [refreshing, setRefreshing] = React.useState(false)
  const { data, loading, error, refetch } = useQuery(MY_ORDERS)

  if (loading) return <Loading />
  if (error) alert(error.message)
  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={refetch} />
      }
    >
      {data.myOrders.length === 0 ? (
        <Text>You have no orders yet</Text>
      ) : (
        <OrderFeed orders={data} navigation={props.navigation} />
      )}
    </ScrollView>
  )
}

export default MyOrdersScreen

const styles = StyleSheet.create({
  container: {},
})

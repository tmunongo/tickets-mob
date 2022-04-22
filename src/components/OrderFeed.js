import {
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import React from 'react'
import Constants from 'expo-constants'
import Order from './Order'

const OrderFeed = (props) => {
  return (
    <View>
      <FlatList
        data={props.orders.myOrders}
        keyExtractor={({ id }) => id.toString()}
        style={styles.feed}
        ItemSeparatorComponent={(highlighted) => (
          <View style={[styles.separator, highlighted && { marginLeft: 0 }]} />
        )}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('Order', {
                id: item.id,
              })
            }
          >
            {/* <ScrollView style={styles.feed}>
              <Text style={{ color: 'white' }}>{item.username}</Text> */}
            <Order order={item} />
            {/* </ScrollView> */}
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default OrderFeed

const styles = StyleSheet.create({
  feed: {
    overflow: 'hidden',
    marginBottom: 5,
    backgroundColor: 'black',
    borderBottomColor: 'grey',
    borderBottomWidth: 3,
  },
})

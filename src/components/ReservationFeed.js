import {
  Dimensions,
  FlatList,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import React from 'react'

function formatDate(unformatted) {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  let date = new Date(unformatted).toLocaleDateString(undefined, options)
  return date
}
const ReservationFeed = (props) => {
  console.log('res feed ', props)
  return (
    <View style={styles.container}>
      <FlatList
        data={props.reservations}
        keyExtractor={({ id }) => id.toString()}
        style={styles.feed}
        ItemSeparatorComponent={(highlighted) => (
          <View style={[styles.separator, highlighted && { marginLeft: 0 }]} />
        )}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('Reservation', {
                session: item.sessionDetails,
                reservation: item,
              })
            }
          >
            <ScrollView style={styles.item}>
              <Text style={styles.itemText}>
                User: @{item.reservedBy.username}
              </Text>
              <Text style={styles.itemText}>
                Movie: {item.sessionDetails.movie.title}
              </Text>
              <Text style={styles.itemText}>
                Ticket for: {item.seat.length}
              </Text>
              <Text style={styles.itemText}>
                Screening Day: {formatDate(item.screeningDay)}
              </Text>
              <Text
                style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}
              >
                Confirmation Code: {item.confirmationCode}
              </Text>
            </ScrollView>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default ReservationFeed

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    height: Dimensions.get('screen').height - 105,
  },
  feed: {
    backgroundColor: 'black',
    borderBottomColor: 'grey',
    borderBottomWidth: 3,
    marginBottom: 5,
    overflow: 'hidden',
  },
  item: {
    borderBottomColor: 'grey',
    borderWidth: 2,
    padding: 5,
  },
  itemText: {
    color: 'white',
    fontFamily: 'monospace',
    fontSize: 16,
    textTransform: 'capitalize',
  },
})

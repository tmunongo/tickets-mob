import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React from 'react'
import Expired from '../assets/expired'
import Valid from '../assets/valid'

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

function dateToMilli(unformatted) {
  let date = new Date(unformatted)
  return date.getTime()
}
const ReservationFeed = (props) => {
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
              <View style={styles.ticket}>
                <View style={styles.meta}>
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
                    Screening Day:{' '}
                    {formatDate(item.sessionDetails.screeningDay)}
                  </Text>
                  <Text
                    style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}
                  >
                    Confirmation Code: {item.confirmationCode}
                  </Text>
                </View>
                {dateToMilli(item.sessionDetails.screeningDay) < Date.now() ? (
                  <Expired style={styles.tag} />
                ) : (
                  <Valid style={styles.tag} />
                )}
              </View>
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
    height: Dimensions.get('screen').height - 140,
  },
  feed: {
    backgroundColor: 'black',
    overflow: 'hidden',
  },
  item: {
    borderBottomColor: 'grey',
    borderWidth: 2,
    padding: 8,
  },
  itemText: {
    color: 'white',
    fontFamily: 'monospace',
    fontSize: 16,
    textTransform: 'capitalize',
  },
  meta: {
    flex: 0,
    height: 'auto',
    paddingLeft: 5,
    width: Dimensions.get('screen').width * 0.7,
  },
  tag: {
    flex: 0,
    width: Dimensions.get('screen').width * 0.3,
  },
  ticket: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
})

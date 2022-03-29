import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React from 'react'
import Theater from './Theater'

const theaters = [
  { id: 1, name: 'Suning 苏宁' },
  { id: 2, name: 'Wanda 万达' },
  { id: 3, name: 'Pagani' },
]

const TheaterFeed = (props) => {
  return (
    <View>
      <FlatList
        data={props.locations.locations}
        keyExtractor={({ id }) => id.toString()}
        style={styles.feed}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('Movie', {
                id: props.movieId,
                theaterId: item.id,
              })
            }
          >
            <Theater theater={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default TheaterFeed

const styles = StyleSheet.create({})

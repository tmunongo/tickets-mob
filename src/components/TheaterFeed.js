import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React from 'react'
import Theater from './Theater'

const TheaterFeed = (props) => {
  return (
    <View>
      <Text style={styles.header}> Locations 🏠 </Text>
      <FlatList
        data={props.locations.locations}
        keyExtractor={({ id }) => id.toString()}
        style={styles.feed}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('Movie', {
                id: props.movieId,
                theater: item,
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

const styles = StyleSheet.create({
  header: {
    borderTopColor: 'white',
    borderTopWidth: 2,
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    flex: 0,
    fontSize: 22,
    fontWeight: 'bold',
    paddingBottom: 5,
    paddingTop: 5,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
})

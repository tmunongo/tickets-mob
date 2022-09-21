import React from 'react'
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
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
  feed: {
    // backgroundColor: '#03071B',
    height: Dimensions.get('screen').height - 40,
  },
  header: {
    borderTopColor: 'white',
    borderTopWidth: 2,
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    color: 'white',
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

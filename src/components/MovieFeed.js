import {
  StyleSheet,
  ScrollView,
  Image,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import React from 'react'
import Movie from './Movie'

const MovieFeed = (props) => {
  return (
    <View style={styles.base}>
      <FlatList
        data={props.movies.MovieFeed.movies}
        keyExtractor={(id) => id.toString()}
        horizontal={false}
        numColumns={3}
        style={styles.container}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('Locations', {
                id: item.id,
              })
            }
          >
            <ScrollView style={styles.feed}>
              {/* <Movie movie={item} /> */}
              <Image style={styles.poster} source={{ uri: item.poster }} />
              <Text
                style={{ color: 'white', alignSelf: 'center', marginLeft: 25 }}
              >
                {item.title}
              </Text>
            </ScrollView>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default MovieFeed

const styles = StyleSheet.create({
  base: {
    paddingBottom: 20,
  },
  container: {
    backgroundColor: 'black',
    marginBottom: 5,
  },
  poster: {
    height: 170,
    width: 100,
    alignSelf: 'center',
    borderRadius: 10,
    marginLeft: 25,
  },
  feed: {
    height: 200,
    display: 'flex',
  },
})

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

const movies = [
  { id: 1, title: 'Movie 1', poster: require('../assets/bvs.jpg') },
  {
    id: 2,
    title: 'Movie 2',
    poster: require('../assets/BladeRunner2049.jpg'),
  },
  {
    id: 3,
    title: 'Movie 3',
    poster: require('../assets/dune-haleyturnbull.jpg'),
  },
  {
    id: 4,
    title: 'Movie 4',
    poster: require('../assets/interstellar-poster.jpg'),
  },
  {
    id: 5,
    title: 'Movie 5',
    poster: require('../assets/watchmen-theatrical-poster-big.jpg'),
  },
  { id: 6, title: 'Movie 6', poster: require('../assets/endgame.jpeg') },
  {
    id: 7,
    title: 'Movie 7',
    poster: require('../assets/silence-cover.jpg'),
  },
  {
    id: 8,
    title: 'Movie 8',
    poster: require('../assets/superman-returns.jpg'),
  },
]

const MovieFeed = (props) => {
  return (
    <View>
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
  container: {
    marginBottom: 5,
    backgroundColor: 'black',
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

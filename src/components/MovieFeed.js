import Constants from 'expo-constants'
import React from 'react'
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

const MovieFeed = (props) => {
  return (
    <View style={styles.base}>
      <FlatList
        data={props.movies.MovieFeed.movies}
        keyExtractor={(id) => id.toString()}
        horizontal={false}
        numColumns={3}
        contentContainerStyle={styles.container}
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
              <View style={styles.title}>
                <Text
                  style={{
                    color: 'black',
                    overflow: 'hidden',
                    textAlign: 'center',
                    width: 80,
                  }}
                >
                  {item.title}
                </Text>
                <Text
                  style={[
                    styles.rating,
                    {
                      color:
                        item.rating === 'R'
                          ? 'darkred'
                          : item.rating === 'G'
                          ? 'lime'
                          : 'white',
                    },
                  ]}
                >
                  {item.rating}
                </Text>
              </View>
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
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: Constants.statusBarHeight,
  },
  container: {
    // backgroundColor: '#03071B',
    // justifyContent: 'center',
    marginBottom: 5,
  },
  feed: {
    height: 260,
    display: 'flex',
  },
  poster: {
    height: 170,
    width: 100,
    alignSelf: 'center',
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  rating: {
    backgroundColor: 'grey',
    borderRadius: 4,
    fontSize: 14,
    fontWeight: 'bold',
    height: 20,
    marginLeft: 5,
    textAlign: 'center',
    width: 20,
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    height: 'auto',
    marginTop: 5,
    marginBottom: 10,
    justifyContent: 'space-around',
  },
})

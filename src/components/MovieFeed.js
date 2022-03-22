import { StyleSheet, ScrollView, Image, Text, View, FlatList } from 'react-native'
import React from 'react'

const movies = [
    { id: 1,title: "Movie 1", posterUrl: require("../assets/bvs.jpg") },
    { id: 2,title: "Movie 2", posterUrl: require("../assets/BladeRunner2049.jpg") },
    { id: 3,title: "Movie 3", posterUrl: require("../assets/dune-haleyturnbull.jpg") },
    { id: 4,title: "Movie 4", posterUrl: require("../assets/interstellar-poster.jpg") },
    { id: 5,title: "Movie 5", posterUrl: require("../assets/watchmen-theatrical-poster-big.jpg") },
    { id: 6,title: "Movie 6", posterUrl: require("../assets/endgame.jpeg") },
    { id: 7, title: "Movie 7", posterUrl: require("../assets/silence-cover.jpg") },
    { id: 8, title: "Movie 8", posterUrl: require("../assets/superman-returns.jpg") },
]

const MovieFeed = props => {
  return (
    <View>
        <FlatList
            horizontal= {false}
            numColumns = {3}
            style={styles.container}
            data={movies}
            keyExtractor={({ id }) => id.toString()}
            renderItem={({ item }) => (
                <ScrollView
                    style={styles.feed}
                >
                    <Image
                        style={styles.poster}
                        source={item.posterUrl}
                    />
                    <Text style={{color: 'white', alignSelf: 'center'}}>{item.title}</Text>
                </ScrollView>
            )}
        />
    </View>
  )
}

export default MovieFeed

const styles = StyleSheet.create({
    container: {
        marginBottom: 5,
        backgroundColor: 'black'
    },
    poster: {
        height: 170,
        width: 100,
        alignSelf: 'center'
    },
    feed: {
        height: 200,
        display: 'flex',
    }
})
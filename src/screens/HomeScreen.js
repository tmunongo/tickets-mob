import { useQuery } from '@apollo/client'
import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import CardCarousel from '../components/CardCarousel'
import MovieFeed from '../components/MovieFeed'
import { GET_MOVIES } from '../gql/query'
import Loading from '../components/Loading'

const HomeScreen = (props) => {
  const { loading, error, data } = useQuery(GET_MOVIES)

  if (loading) return <Loading />
  if (error) return <Text>Error loading movies + {error.message}</Text>

  return (
    <ScrollView style={styles.base}>
      <View style={styles.search}>
        <Text style={styles.text}> Search Box Here </Text>
      </View>
      <CardCarousel />
      <MovieFeed movies={data} navigation={props.navigation} />
    </ScrollView>
  )
}

HomeScreen.navigationOptions = {
  title: 'HomeScreen',
}

export default HomeScreen

const styles = StyleSheet.create({
  base: {
    backgroundColor: '#525252',
  },
  featured: {
    marginTop: 40,
    paddingHorizontal: 0,
    flex: 1,
  },
  feed: {
    backgroundColor: 'white',
  },
  items: {
    flex: 1,
    backgroundColor: 'blue',
  },
  items2: {
    flex: 1,
    backgroundColor: 'red',
  },
  items3: {
    backgroundColor: 'gold',
    flex: 1,
  },
  poster: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  search: {
    height: 50,
    backgroundColor: 'black',
  },
  text: {
    color: 'bisque',
    alignSelf: 'center',
    fontSize: 20,
  },
  title: {
    padding: 20,
    fontSize: 8,
  },
})

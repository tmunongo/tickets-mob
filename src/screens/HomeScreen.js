import { useQuery } from '@apollo/client'
import React from 'react'
import {
  View,
  Text,
  RefreshControl,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native'
import CardCarousel from '../components/CardCarousel'
import MovieFeed from '../components/MovieFeed'
import { GET_MOVIES } from '../gql/query'
import Loading from '../components/Loading'
import Constants from 'expo-constants'
import Separator from '../components/Separator'

const HomeScreen = (props) => {
  const [refreshing, setRefreshing] = React.useState(false)
  const { loading, error, data, refetch } = useQuery(GET_MOVIES)

  if (loading) return <Loading />
  if (error) return <Text>Error loading movies + {error.message}</Text>

  return (
    <ScrollView
      style={styles.base}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={refetch} />
      }
    >
      <View style={styles.search}>
        <Text style={styles.text}> Search Box Here </Text>
      </View>
      <CardCarousel movies={data} navigation={props.navigation} />
      <Separator />
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
    backgroundColor: 'black',
    top: Constants.statusBarHeight,
  },
  featured: {
    marginTop: 40,
    paddingHorizontal: 0,
    flex: 1,
  },
  feed: {
    backgroundColor: 'white',
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

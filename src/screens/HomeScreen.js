import { useQuery } from '@apollo/client'
import React from 'react'
import {
  Image,
  RefreshControl,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native'
import CardCarousel from '../components/CardCarousel'
import MovieFeed from '../components/MovieFeed'
import { GET_MOVIES } from '../gql/query'
import Loading from '../components/Loading'
import Constants from 'expo-constants'
import Separator from '../components/Separator'

const HomeScreen = (props) => {
  const [search, setSearch] = React.useState('')
  const [refreshing, setRefreshing] = React.useState(false)
  const { loading, error, data, refetch } = useQuery(GET_MOVIES)

  if (loading) return <Loading />
  if (error)
    return (
      <View>
        <Text>Error loading movies + {error.message}</Text>
      </View>
    )
  return (
    <ScrollView
      style={styles.base}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={refetch} />
      }
    >
      <View style={styles.search}>
        <TextInput
          clearButtonMode="always"
          maxLength={15}
          style={styles.searchBar}
          value={search}
          onChangeText={(text) => setSearch(text)}
          placeholder="Search"
        />
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
    backgroundColor: 'white',
  },
  searchBar: {
    borderRadius: 10,
    height: 60,
    marginLeft: 40,
    marginRight: 40,
    paddingLeft: 10,
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

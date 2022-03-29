import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import Movie from '../components/Movie'
import { useQuery } from '@apollo/client'
import { GET_MOVIE } from '../gql/query'
import Loading from '../components/Loading'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Reviews from './Reviews'

const Tab = createMaterialTopTabNavigator

function MovieHome(props) {
  return (
    <View style={styles.container}>
      <Movie
        movie={props.data.movie}
        navigation={props.navigation}
        locationId={props.theaterId}
      />
    </View>
  )
}

const MovieScreen = ({ route, navigation }) => {
  const { id, theaterId } = route.params
  const { data, loading, error } = useQuery(GET_MOVIE, {
    variables: { movieId: id },
  })
  if (loading) return <Loading />
  if (error)
    return (
      <View style={styles.container}>
        <Text>{error.message}</Text>
      </View>
    )
  return (
    // <Tab.Navigator>
    //   <Tab.Screen
    //     name="Home"
    //     component={MovieHome}
    //     initialParams={{
    //       data: { data },
    //       navigation: { navigation },
    //       theaterId: { theaterId },
    //     }}
    //   />
    //   <Tab.Screen name="Reviews" component={Reviews} />
    // </Tab.Navigator>
    <MovieHome data={data} navigation={navigation} theaterId={theaterId} />
    //</View>
  )
}

export default MovieScreen

const styles = StyleSheet.create({
  container: {
    top: Constants.statusBarHeight,
  },
})

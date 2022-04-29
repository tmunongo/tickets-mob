import { useQuery } from '@apollo/client'
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import React from 'react'
import Constants from 'expo-constants'
import Loading from '../components/Loading'
import { GET_THEATERS } from '../gql/query'
import Theater from '../components/Theater'

const TheaterScreen = (props) => {
  const { loading, error, data } = useQuery(GET_THEATERS)

  if (loading) return <Loading />
  if (error)
    return (
      <View style={styles.container}>
        <Text>Error loading theaters + {error.message}</Text>
      </View>
    )
  return (
    <View style={styles.container}>
      <Text style={styles.header}> Locations 🎦 </Text>

      <FlatList
        data={data.theaters}
        keyExtractor={({ id }) => id.toString()}
        style={styles.feed}
        ItemSeparatorComponent={(highlighted) => (
          <View style={[styles.separator, highlighted && { marginLeft: 0 }]} />
        )}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('Catalog', {
                id: item.id,
              })
            }
          >
            {/* <ScrollView style={styles.feed}>
              <Text style={{ color: 'white' }}>{item.username}</Text> */}
            <Theater theater={item} />
            {/* </ScrollView> */}
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default TheaterScreen

const styles = StyleSheet.create({
  container: {
    top: Constants.statusBarHeight,
  },
  feed: {
    height: 100,
    overflow: 'hidden',
    marginBottom: 5,
    borderBottomColor: 'grey',
    borderBottomWidth: 3,
  },
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
  separator: {
    height: 1,
    width: 100,
    backgroundColor: '#ced0ce',
  },
})

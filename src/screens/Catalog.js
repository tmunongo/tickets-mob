import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React from 'react'
import Constants from 'expo-constants'

const CatalogScreen = (props) => {
  console.log('cata: ', props)
  const { id, other } = props.route.params
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Catalog</Text>
      <FlatList
        data={props.route.params.catalog}
        keyExtractor={(id) => id.toString()}
        horizontal={false}
        numColumns={3}
        style={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('Movie', {
                id: item.id,
                theater: id,
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
      {/* <MovieFeed movies={data.catalogue} navigation={navigation} /> */}
    </View>
  )
}

export default CatalogScreen

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height,
    top: Constants.statusBarHeight,
  },
  feed: {
    height: 200,
    display: 'flex',
  },
  header: {
    backgroundColor: 'black',
    borderTopColor: 'white',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    color: 'white',
    flex: 0,
    fontFamily: 'monospace',
    fontSize: 22,
    fontWeight: 'bold',
    padding: 5,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  list: {
    backgroundColor: 'black',
    borderColor: 'white',
    borderBottomWidth: 2,
    marginBottom: 0,
    marginTop: 2,
  },
  poster: {
    height: 170,
    width: 100,
    alignSelf: 'center',
    borderRadius: 10,
    marginLeft: 25,
  },
})

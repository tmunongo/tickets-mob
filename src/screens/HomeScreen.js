import React from 'react'
import { 
  View, 
  Screen, 
  Text, 
  Button, 
  StyleSheet, 
  Image,
  ImageBackground, 
  ScrollView,
  Dimensions 
} from 'react-native'
import CardCarousel from '../components/CardCarousel'
import MovieFeed from '../components/MovieFeed'

const HomeScreen = ({ navigation, route }) => (
  <ScrollView style={styles.base}>

    <View style={styles.search}>
      <Text style={styles.text}> Search Box Here </Text>
    </View>

    <CardCarousel />
    <MovieFeed />
    {/* <View style={styles.feed}>
      <Text> Everything else </Text>
    </View> */}
  </ScrollView>
)

export default HomeScreen

const styles = StyleSheet.create({
  base: {
    backgroundColor: '#525252',
  },
  featured: {
    marginTop: 40,
    paddingHorizontal: 0,
    flex: 1
    //alignItems: 'center',
    // flexDirection: 'row',
    // justifyContent: "space-between",
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
    flex: 1
  },
  poster: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
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
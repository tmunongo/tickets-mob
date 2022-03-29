import React from 'react'
import { Button, Text, View, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './HomeScreen'
import locations from './locations'
import MovieScreen from './Movie'

const MovieStack = createStackNavigator()

export default function MoviesScreen() {
  return (
    <MovieStack.Navigator>
      <MovieStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <MovieStack.Screen
        name="Locations"
        component={locations}
        options={{ headerShown: false }}
      />
      <MovieStack.Screen
        name="Movie"
        component={MovieScreen}
        options={{ headerShown: false }}
      />
    </MovieStack.Navigator>
  )
}

// export default function Movie() {
//   return (
//     <HomeScreen />
//      <Root.Navigator>
//        <Root.Screen
//          name="Home"
//          component={HomeScreen}
//          options={{ headerShown: false }}
//        />
//        <Root.Screen name="Screen2" component={Screen2} />
//      </Root.Navigator>
//   )
// }

const styles = StyleSheet.create({
  screen: {
    marginTop: 40,
    alignItems: 'center',
  },
  title: {
    padding: 20,
    fontSize: 42,
  },
})

import * as React from 'react'
import { Button, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Movies from './Movies'
import MovieScreen from './Movie'
import locations from './locations'
import TheaterScreen from './TheaterScreen'
import MeScreen from './MeScreen'
import { Ionicons } from '@expo/vector-icons'
import { createStackNavigator } from '@react-navigation/stack'

const MovieStack = createStackNavigator()

function MoviesScreen() {
  return (
    <MovieStack.Navigator>
      <MovieStack.Screen
        name="Home"
        component={Movies}
        options={{ headerShown: false }}
      />
      <MovieStack.Screen
        name="Movie"
        component={MovieScreen}
        options={{ headerShown: false }}
      />
      <MovieStack.Screen
        name="Locations"
        component={locations}
        options={{ headerShown: false }}
      />
    </MovieStack.Navigator>
    // <Movies />
  )
}

function Theaters() {
  return <TheaterScreen />
}

function Me() {
  return <MeScreen />
}

const Tab = createBottomTabNavigator()

export default function Main() {
  return (
    <Tab.Navigator
      barStyle={{ backgroundColor: 'black' }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline'
          } else if (route.name === 'Theaters') {
            iconName = focused ? 'videocam' : 'videocam-outline'
          } else if (route.name === 'Me') {
            iconName = focused ? 'person' : 'person-outline'
          }

          return <Ionicons name={iconName} size={size} color={color} />
        },
      })}
      tabBarOptions={{
        activeTintColor: 'dodgerblue',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={MoviesScreen} />
      <Tab.Screen name="Theaters" component={Theaters} />
      <Tab.Screen name="Me" component={Me} />
    </Tab.Navigator>
  )
}

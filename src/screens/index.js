import * as React from 'react'
import * as SecureStore from 'expo-secure-store'
import { Button, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Movies from './Movies'
import MovieScreen from './Movie'
import locations from './locations'
import TheaterScreen from './TheaterScreen'
import MeScreen from './MeScreen'
import { Ionicons } from '@expo/vector-icons'
import { createStackNavigator } from '@react-navigation/stack'
import CatalogScreen from './Catalog'
import MoviesScreen from './Movies'
import Loading from '../components/Loading'
import MyOrdersScreen from './MyOrdersScreen'
import MyTicketsScreen from './MyTicketsScreen'
import Authentication from './Authentication'

async function getValueFor(key) {
  let result = await SecureStore.getItemAsync(key)
  if (result) {
    alert("🔐 Here's your value \n" + result)
  } else {
    alert('No values stored under that key')
  }
}

const TheaterStack = createStackNavigator()

function Theaters() {
  return (
    <TheaterStack.Navigator>
      <TheaterStack.Screen
        name="Theaters"
        component={TheaterScreen}
        options={{ headerShown: false }}
      />
      <TheaterStack.Screen
        name="Catalog"
        component={CatalogScreen}
        options={{ headerShown: false }}
      />
    </TheaterStack.Navigator>
  ) //return <TheaterScreen />
}

const MeStack = createStackNavigator()

function Me() {
  return (
    <MeStack.Navigator>
      <MeStack.Screen name="Profile" component={MeScreen} />
      <MeStack.Screen name="My Orders" component={MyOrdersScreen} />
      <MeStack.Screen name="My Tickets" component={MyTicketsScreen} />
    </MeStack.Navigator>
  )
  //return <MeScreen />
}

const Tab = createBottomTabNavigator()

const AuthStack = createStackNavigator()

const checkLoginState = async () => {
  //retrieve token value
  const userToken = await SecureStore.getItemAsync('token')
  return userToken
}

export default function Main(props) {
  const [isLoading, setIsLoading] = React.useState(true)
  const [user, setUser] = React.useState(null)

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading)
      setUser({})
    }, 200)
  }, [])

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
      {isLoading ? (
        <AuthStack.Screen name="Loading" component={Loading} />
      ) : user ? (
        <>
          <Tab.Screen name="Home" component={MoviesScreen} />
          <Tab.Screen name="Theaters" component={Theaters} />
          <Tab.Screen name="Me" component={Me} />
        </>
      ) : (
        <AuthStack.Screen name="auth" component={Authentication} />
      )}
    </Tab.Navigator>
  )
}

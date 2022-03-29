import React, { useEffect } from 'react'
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
import { AuthContext } from '../components/context'

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

export default function Main() {
  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  }

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        }
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        }
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        }
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        }
    }
  }

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState
  )
  const authContext = React.useMemo(
    () => ({
      signIn: async (foundUser) => {
        const userToken = String(foundUser.userToken)
        const userName = foundUser.username

        try {
          await SecureStore.setItemAsync('userToken', userToken)
        } catch (error) {
          console.log(error)
        }
        dispatch({ type: 'LOGIN', id: userName, token: userToken })
      },

      signOut: async () => {
        try {
          await SecureStore.deleteItemAsync('userToken')
        } catch (error) {
          console.log(error)
        }
        dispatch({ type: 'LOGOUT' })
      },
      signUp: async () => {
        try {
          await SecureStore.setItemAsync('userToken', userToken)
        } catch (error) {
          console.log(error)
        }
      },
    }),
    []
  )
  useEffect(() => {
    setTimeout(async () => {
      let userToken
      userToken = null
      try {
        userToken = await SecureStore.getItemAsync('userToken')
      } catch (error) {
        console.log(error)
      }
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken })
    }, 1000)
  }, [])

  console.log(loginState.userToken)

  return (
    <AuthContext.Provider value={authContext}>
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
        {loginState.isLoading ? (
          <AuthStack.Screen name="Loading" component={Loading} />
        ) : loginState.userToken ? (
          <>
            <Tab.Screen name="Home" component={MoviesScreen} />
            <Tab.Screen name="Theaters" component={Theaters} />
            <Tab.Screen name="Me" component={Me} />
          </>
        ) : (
          <AuthStack.Screen name="auth" component={Authentication} />
        )}
      </Tab.Navigator>
    </AuthContext.Provider>
  )
}

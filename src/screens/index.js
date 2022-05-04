import React, { useEffect, useState } from 'react'
import { Button, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AuthLoading from './AuthLoading'
import MovieScreen from './Movie'
import TheaterScreen from './TheaterScreen'
import MeScreen from './MeScreen'
import { Ionicons } from '@expo/vector-icons'
import { createStackNavigator } from '@react-navigation/stack'
import CatalogScreen from './Catalog'
import MoviesScreen from './Movies'
import MyOrdersScreen from './MyOrdersScreen'
import MyTicketsScreen from './MyTicketsScreen'
import Authentication from './Authentication'
import { AuthContext } from '../components/Context'
import OrderScreen from './OrderScreen'
import PaymentScreen from './PaymentScreen'
import SeatSelector from './SeatSelector'
import SessionCreator from './SessionCreator'
import Reservation from './Reservation'
import ReservationCreator from './ReservationCreator'
import SessionUpdater from './SessionUpdater'

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
      <TheaterStack.Screen
        name="Movie"
        component={MovieScreen}
        options={{ headerShown: false }}
      />
      <TheaterStack.Screen
        name="PaymentScreen"
        component={PaymentScreen}
        options={{ headerShown: false }}
      />
      <TheaterStack.Screen
        name="SeatSelector"
        component={SeatSelector}
        options={{ headerShown: false }}
      />
      <TheaterStack.Screen
        name="ReservationCreator"
        component={ReservationCreator}
        options={{ headerShown: false }}
      />
      <TheaterStack.Screen
        name="Reservation"
        component={Reservation}
        options={{ headerShown: false }}
      />
      <TheaterStack.Screen
        name="SessionCreator"
        component={SessionCreator}
        options={{ headerShown: true }}
      />
      <TheaterStack.Screen
        name="SessionUpdater"
        component={SessionUpdater}
        options={{ headerShown: false }}
      />
    </TheaterStack.Navigator>
  ) //return <TheaterScreen />
}

const MeStack = createStackNavigator()

function Me() {
  return (
    <MeStack.Navigator>
      <MeStack.Screen
        name="Profile"
        component={MeScreen}
        options={{ headerShown: false }}
      />
      <MeStack.Screen
        name="MyOrders"
        component={MyOrdersScreen}
        options={{ headerShown: false }}
      />
      <MeStack.Screen
        name="MyTickets"
        component={MyTicketsScreen}
        options={{ headerShown: false }}
      />
      <MeStack.Screen
        name="Order"
        component={OrderScreen}
        options={{ headerShown: false }}
      />
      <MeStack.Screen
        name="Reservation"
        component={Reservation}
        options={{ headerShown: false }}
      />
    </MeStack.Navigator>
  )
  //return <MeScreen />
}

const Tab = createBottomTabNavigator()

const AuthStack = createStackNavigator()

export default function Main() {
  // const authentication = useAuthentication()
  // const [hasUser, sethasUser] = useState(authentication.hasUser)
  const [isLoading, setLoading] = useState(initialState)

  const initialState = {
    hasUser: false,
    isLoading: true,
  }

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'USER': {
        return {
          ...prevState,
          hasUser: true,
        }
      }
      case 'NO_USER': {
        return {
          ...prevState,
          hasUser: false,
        }
      }
      case 'CHECK_USER': {
        return {
          ...prevState,
          isLoading: false,
        }
      }
    }
  }

  const [loginState, dispatch] = React.useReducer(loginReducer, initialState)

  const authContext = React.useMemo(() => ({
    aUser: async (userToken) => {
      dispatch({ type: 'USER', token: userToken })
    },
    noUser: async () => {
      dispatch({ type: 'NO_USER' })
    },
    checkUser: async () => {
      dispatch({ type: 'CHECK_USER' })
    },
  }))

  return (
    // <AuthContext.Consumer>
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
          activeTintColor: '#10AA15',
          inactiveTintColor: 'black',
        }}
      >
        {loginState.isLoading ? (
          <AuthStack.Screen name="Loading" component={AuthLoading} />
        ) : loginState.hasUser ? (
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

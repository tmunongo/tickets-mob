import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React from 'react'
import Constants from 'expo-constants'
import * as SecureStore from 'expo-secure-store'
import { AuthContext } from '../components/Context'
import { useQuery } from '@apollo/client'
import { CURRENT_USER } from '../gql/query'
import Loading from '../components/Loading'

const MeScreen = (props) => {
  const [refreshing, setRefreshing] = React.useState(false)

  const { noUser } = React.useContext(AuthContext)
  const { data, loading, error, refetch } = useQuery(CURRENT_USER)

  const signOut = () => {
    SecureStore.deleteItemAsync('userToken')
    noUser()
  }

  function whoAmI() {
    try {
      alert(data.currentUser.username)
    } catch (error) {
      alert(error.message)
    }
  }
  if (loading) return <Loading />
  if (error) console.log(error.message)
  console.log(data)
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={refetch} />
      }
      style={styles.container}
    >
      <Text style={styles.header}>Profile</Text>
      <TouchableOpacity style={styles.button} onPress={whoAmI}>
        <Text style={styles.buttonText}> 👤 Me</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={(e) =>
          props.navigation.push('MyOrders', {
            orders: data.currentUser.ordersMade,
          })
        }
      >
        <Text style={styles.buttonText}> 🛒 My Orders</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={(e) =>
          props.navigation.push('MyTickets', {
            reservations: data.currentUser.reservationsMade,
          })
        }
      >
        <Text style={styles.buttonText}> 🎟️ My Tickets</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={signOut}>
        <Text style={styles.buttonText}> ⚠️ Sign Out</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

MeScreen.navigationOptions = {
  title: 'Profile',
}

export default MeScreen

const styles = StyleSheet.create({
  button: {
    borderBottomColor: '#00AA15',
    borderBottomWidth: 1,
    flex: 0,
    height: 50,
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'monospace',
  },
  container: {
    top: Constants.statusBarHeight,
  },
  header: {
    borderTopColor: 'white',
    borderTopWidth: 2,
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    flex: 0,
    fontFamily: 'monospace',
    fontSize: 22,
    fontWeight: 'bold',
    paddingBottom: 5,
    paddingTop: 5,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
})

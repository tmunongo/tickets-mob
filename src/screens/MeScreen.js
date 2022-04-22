import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'
import * as SecureStore from 'expo-secure-store'
import { AuthContext } from '../components/Context'
import { useQuery } from '@apollo/client'
import { CURRENT_USER } from '../gql/query'
import Loading from '../components/Loading'

const MeScreen = (props) => {
  const { noUser } = React.useContext(AuthContext)
  const { data, loading, error } = useQuery(CURRENT_USER)

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
  return (
    <View style={styles.container}>
      <Text>Me</Text>
      <Button title="Me" onPress={whoAmI} />
      <Button title="Sign Out" onPress={signOut} />
      <Button
        title="My Orders"
        onPress={(e) => props.navigation.push('MyOrders')}
      />
    </View>
  )
}

MeScreen.navigationOptions = {
  title: 'Profile',
}

export default MeScreen

const styles = StyleSheet.create({
  container: {
    // top: Constants.statusBarHeight,
  },
})

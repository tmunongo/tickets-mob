import { StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import Constants from 'expo-constants'
import Loading from '../components/Loading'
import { AuthContext } from '../components/Context'

const AuthLoading = (props) => {
  const { checkUser } = React.useContext(AuthContext)

  useEffect(() => {
    setTimeout(async () => {
      try {
        checkUser()
      } catch (error) {
        console.log(error)
      }
    }, 2000)
  }, [])

  return (
    // <View style={styles.container}>
    <Loading />
    // </View>
  )
}

export default AuthLoading

const styles = StyleSheet.create({
  container: {
    top: Constants.statusBarHeight,
  },
})

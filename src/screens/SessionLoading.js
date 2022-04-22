import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Loading from '../components/Loading'
import gql, { useMutation, useQuery } from '@apollo/client'
import { SessionContext } from '../components/Context'

const SessionLoading = (props) => {
  const orderDetails = props.route.params.data.newOrder
  console.log('session loading: ', props)

  function checkSession() {
    const { error, loading } = useQuery(
      SESSION_CHECK,
      {
        variables: {
          movieId: orderDetails.toWatch.id,
          quality: orderDetails.quality,
          screeningDay: orderDetails.screeningDay,
          screeningTime: orderDetails.screeningTime,
          location: orderDetails.location.id,
        },
      },
      {
        onCompleted: (data) => {
          if (data.session !== null)
            props.navigation.navigate('SeatSelector', {
              sessionId: data.session.id,
            })
          else props.navigation.navigate('SessionCreator', orderDetails)
        },
      }
    )
  }

  useEffect(() => {
    setTimeout(async () => {
      checkSession()
    }, 2000)
  }, [])

  //   const initial = {
  //     exists: false,
  //     isLoading: true,
  //   }
  //   const sessionReducer = (prevState, action) => {
  //     switch (action.type) {
  //       case 'CHECK_SESSION': {
  //         return {
  //           ...prevState,
  //           isLoading: false,
  //         }
  //       }
  //       case 'NEW_SESSION': {
  //         return {
  //           ...prevState,

  //           hasSession: true,
  //         }
  //       }
  //     }
  //   }

  //   const [sessionState, dispatch] = React.useReducer(
  //     sessionReducer,
  //     initialState
  //   )

  //   const sessionContext = React.useMemo(() => ({
  //     checkSession: async () => {
  //       dispatch({ type: 'CHECK_USER' })
  //     },
  //     aSession: async (order) => {
  //       dospatch({ type: NEW_SESSION })
  //     },
  //   }))

  //   if (error) console.log(error.message)
  return <Loading />
}

export default SessionLoading

const styles = StyleSheet.create({})

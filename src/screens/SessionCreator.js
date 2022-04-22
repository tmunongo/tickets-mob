import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { gql, useMutation } from '@apollo/client'
// import { SessionContext } from '../components/Context'
import SessionForm from '../components/SessionForm'

const SessionCreator = (props) => {
  const RETRIEVE_SESSION = gql`
    mutation retrieveSession(
      $movieId: ID!
      $quality: String!
      $screeningDay: Date!
      $screeningTime: String!
      $locationId: ID!
    ) {
      retrieveSession(
        movieId: $movieId
        quality: $quality
        screeningDay: $screeningDay
        screeningTime: $screeningTime
        locationId: $locationId
      ) {
        id
        location {
          id
          username
        }
        movie {
          title
          year
          id
        }
        screeningDay
        screeningTime
        quality
        seatsAvailable
        seatMap
        selectedSeats
      }
    }
  `

  const orderDetails = props.route.params.data.newOrder

  const [retrieveSession, { error, loading }] = useMutation(RETRIEVE_SESSION, {
    onCompleted: (data) => {
      props.navigation.navigate('SeatSelector', {
        params: data.retrieveSession,
      })
    },
  })

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
  if (error) console.log('error: ', error.message)
  return (
    // <SessionContext.Provider>
    // <View>
    //   <Text>Session Creator!</Text>
    // </View>
    <SessionForm
      action={retrieveSession}
      params={orderDetails}
      navigation={props.navigation}
    />
    // </SessionContext.Provider>
  )
}

export default SessionCreator

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})

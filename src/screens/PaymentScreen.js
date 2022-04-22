import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Constants from 'expo-constants'
import { CardField, useConfirmPayment } from '@stripe/stripe-react-native'
import { gql, useMutation } from '@apollo/client'
// import PaymentForm from '../components/PaymentForm'

const PaymentForm = (props) => {
  // console.log('payment from props: ', props)
  const [cardDetails, setCardDetails] = useState()

  const handleSubmit = (e) => {
    if (!cardDetails?.complete) {
      alert('Please enter complete details')
      return
    }
    props.action({
      variables: {
        totalPrice: total,
      },
    })
  }

  return (
    <View style={styles.container}>
      <Text>PaymentScreen</Text>
      <TextInput
        autoCapitalize="none"
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={(value) => setEmail(value)}
        style={styles.input}
      />
      <CardField
        postalCodeEnabled={false}
        placeholder={{
          number: '4242 4242 4242 4242',
        }}
        cardStyle={styles.card}
        style={styles.cardContainer}
        onCardChange={(cardDetails) => {
          setCardDetails(cardDetails)
        }}
      />
      <Button
        // action={paymentIntent}
        title="Confirm Payment"
        style={styles.button}
        onPress={(e) => handleSubmit(e)}
      ></Button>
    </View>
  )
}

const PaymentScreen = (props) => {
  // console.log(props)
  const RETRIEVE_INTENT = gql`
    mutation Mutation($totalPrice: Int!) {
      retrievePaymentIntent(totalPrice: $totalPrice)
    }
  `

  // console.log(props)
  const [email, setEmail] = useState('')
  const { confirmPayment, loading } = useConfirmPayment()
  const [cardDetails, setCardDetails] = useState()

  const handleSubmit = (e) => {
    // e.PreventDefault()
    if (!cardDetails?.complete || !email) {
      alert('Please enter complete details')
      return
    }
    retrievePaymentIntent({
      variables: {
        totalPrice: props.route.params.total,
      },
    })
  }
  const [retrievePaymentIntent, { error }] = useMutation(RETRIEVE_INTENT, {
    // variables: { totalPrice: props.route.params.total },
    onCompleted: (data) => {
      const billingDetails = {
        email: email,
      }
      //confirm payment with card details
      const { paymentIntent, error } = confirmPayment(
        data.retrievePaymentIntent,
        {
          type: 'Card',
          billingDetails: billingDetails,
        }
      )
      if (error) {
        alert(`Payment confirmation error ${error.message}`)
      } else {
        alert('Payment successful')

        props.navigation.navigate('ReservationCreator', {
          params: props.route.params,
        })
        //navigate to reservation page
      }
    },
  })

  return (
    //use a form
    // <PaymentForm
    //   action={retrievePaymentIntent}
    //   total={props.route.params.total}
    //   navigation={props.navigation}
    //   setEmail={setEmail}
    // />
    <View style={styles.container}>
      <Text>PaymentScreen</Text>
      <TextInput
        autoCapitalize="none"
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={(value) => setEmail(value)}
        style={styles.input}
      />
      <CardField
        postalCodeEnabled={false}
        placeholder={{
          number: '6200 0000 0000 0005',
        }}
        cardStyle={styles.card}
        style={styles.cardContainer}
        onCardChange={(cardDetails) => {
          setCardDetails(cardDetails)
        }}
      />
      <Button
        action={retrievePaymentIntent}
        title="Confirm Payment"
        style={styles.button}
        onPress={(e) => handleSubmit(e)}
      ></Button>
    </View>
  )
}

export default PaymentScreen

const styles = StyleSheet.create({
  button: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 280,
    backgroundColor: 'dodgerblue',
    borderRadius: 25,
  },
  card: {
    backgroundColor: '#efefefef',
  },
  cardContainer: {
    height: 50,
    marginVertical: 30,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 20,
    top: Constants.statusBarHeight,
  },
  input: {
    backgroundColor: '#efefefef',
    borderBottomColor: 'black',
    borderRadius: 10,
    fontSize: 20,
    height: 50,
    padding: 10,
  },
})

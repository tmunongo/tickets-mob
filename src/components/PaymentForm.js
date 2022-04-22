import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { CardField } from '@stripe/stripe-react-native'
import Constants from 'expo-constants'

const PaymentForm = (props) => {
  console.log('payment from props: ', props)
  const [cardDetails, setCardDetails] = useState()

  const handleSubmit = (e) => {
    if (!cardDetails?.complete) {
      alert('Please enter complete details')
      return
    }
    props.action({
      variables: {
        totalPrice: props.total,
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
        onChangeText={(value) => props.setEmail(value.toString())}
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

// export default PaymentForm

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

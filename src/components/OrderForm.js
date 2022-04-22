import {
  Button,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useState } from 'react'
import Separator from './Separator'
import DatePicker from 'expo-datepicker'
import { Entypo } from '@expo/vector-icons'

const times = [
  { time: '14:15' },
  { time: '16:30' },
  { time: '18:00' },
  { time: '19:30' },
  { time: '20:30' },
  { time: '22:00' },
]

const qualityList = [
  { q: '2D', pS: false },
  { q: 'IMAX 2D', pS: false },
  { q: 'IMAX 3D', pS: false },
]

const OrderForm = (params) => {
  const [time, setTime] = useState('')
  const [date, setDate] = useState(new Date().toLocaleDateString(undefined))
  const [quality, setQuality] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(params.location.id, params.movie.id, time, date, quality)
    params.action({
      variables: {
        locationId: params.location.id,
        movieId: params.movie.id,
        screeningTime: time,
        screeningDay: date,
        quality: quality,
      },
    })
  }

  return (
    <View style={styles.container}>
      {/* <Separator /> */}
      <Text style={styles.title}>
        Your selected movie is:{' '}
        <Text style={styles.strong}>{params.movie.title}</Text>
      </Text>
      <Separator />
      <Text style={styles.title}>
        Showing at:{' '}
        <Text style={styles.strong}>{params.location.username}</Text>
      </Text>
      <Separator />
      <Text style={styles.title}>Screening Times: </Text>
      <ScrollView
        bounces={false}
        contentContainerStyle={styles.timeScroller}
        horizontal={true}
        snapToInterval={30}
        showsHorizontalScrollIndicator={false}
      >
        {times.map((item, index) => {
          return (
            <TouchableOpacity
              color={'black'}
              //   title={item.time}
              onPress={(e) => setTime(item.time)}
              style={styles.button}
            >
              <Text style={styles.buttonText}>{item.time}</Text>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
      <Separator />
      <Text style={styles.title}>Screening Day: </Text>
      <DatePicker
        date={date}
        onChange={(date) => setDate(date)}
        icon={
          <Entypo
            name="chevron-right"
            size={30}
            color="black"
            borderColor="black"
          />
        }
      />
      <Text style={styles.title}>Quality: </Text>
      <ScrollView
        bounces={false}
        contentContainerStyle={styles.timeScroller}
        horizontal={true}
        snapToInterval={30}
        showsHorizontalScrollIndicator={false}
      >
        {qualityList.map((item, index) => {
          return (
            <TouchableOpacity
              color={'black'}
              //   title={item.time}
              onPress={(e) => {
                setQuality(item.q)
                if (!item.pS) item.pS = true
                else item.pS = false
                //console.log(pressStatus, pressCount)
              }}
              style={item.pS ? styles.button : styles.buttonPressed}
            >
              <Text style={styles.buttonText}>{item.q}</Text>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
      <Button
        style={styles.orderButton}
        title="Order Ticket"
        onPress={(e) => handleSubmit(e)}
      />
    </View>
  )
}

export default OrderForm

const styles = StyleSheet.create({
  button: {
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 50,
    padding: 5,
    marginBottom: 5,
    marginLeft: 25,
    marginTop: 5,
  },
  buttonPressed: {
    backgroundColor: 'dodgerblue',
    borderWidth: 2,
    borderRadius: 50,
    marginBottom: 5,
    marginLeft: 15,
    marginTop: 5,
    padding: 5,
  },
  buttonText: {
    fontWeight: 'bold',
  },
  container: {
    backgroundColor: 'white',
    marginHorizontal: 15,
    borderRadius: 25,
  },
  orderButton: {
    paddingTop: 5,
  },
  title: {
    color: 'black',
    marginLeft: 15,
    fontSize: 20,
  },
  titleNoBorder: {
    color: 'black',
    fontSize: 20,
    paddingBottom: 3,
  },
  strong: {
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  times: {
    marginTop: 5,
    padding: 2,
  },
})

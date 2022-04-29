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
        Selected Movie: <Text style={styles.strong}>{params.movie.title}</Text>
      </Text>
      <Separator />
      <Text style={styles.title}>
        Showing At 📌:
        <Text style={styles.strong}>{params.location.fullName}</Text>
      </Text>
      <Separator />
      <Text style={styles.title}>Screening Times ⏲️ </Text>
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
              color={'white'}
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
      <Text style={styles.title}>Screening Day 📆 </Text>
      <DatePicker
        date={date}
        onChange={(date) => setDate(date)}
        icon={
          <Entypo
            name="chevron-right"
            size={30}
            color="#10AA15"
            borderColor="white"
          />
        }
      />
      <Separator />
      <Text style={styles.title}>Quality 📽️ </Text>
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
      <Separator />

      <TouchableOpacity
        style={styles.orderButton}
        onPress={(e) => handleSubmit(e)}
      >
        <Text style={styles.orderButtonText}>Order Ticket</Text>
      </TouchableOpacity>
    </View>
  )
}

export default OrderForm

const styles = StyleSheet.create({
  button: {
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 30,
    padding: 5,
    marginBottom: 5,
    marginLeft: 25,
    marginTop: 5,
  },
  buttonPressed: {
    backgroundColor: '#196C1B',
    borderWidth: 2,
    borderRadius: 30,
    marginBottom: 5,
    marginLeft: 15,
    marginTop: 5,
    padding: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  container: {
    backgroundColor: 'black',
    borderRadius: 25,
    marginHorizontal: 15,
    paddingTop: 10,
  },
  orderButton: {
    alignItems: 'center',
    backgroundColor: '#196C1B',
    borderRadius: 10,
    height: 30,
    paddingTop: 5,
    textAlign: 'center',
    width: 360,
  },
  orderButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  strong: {
    color: 'yellow',
    fontWeight: 'bold',
    fontStyle: 'normal',
    textTransform: 'capitalize',
  },
  timeScroller: {
    alignItems: 'center',
  },
  title: {
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#10AA15', //10AA15
    borderRadius: 15,
    color: 'white',
    flex: 0,
    fontFamily: 'monospace',
    fontSize: 14,
    height: 40,
    justifyContent: 'center',
    marginLeft: 15,
    paddingTop: 10,
    textAlign: 'center',
    width: 300,
  },
  titleNoBorder: {
    color: 'white',
    fontSize: 20,
    paddingBottom: 3,
  },
  times: {
    marginTop: 5,
    padding: 2,
  },
})

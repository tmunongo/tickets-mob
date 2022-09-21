import { Entypo } from '@expo/vector-icons'
import DatePicker from 'expo-datepicker'
import React, { useState } from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import Separator from './Separator'

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
  const [selectedTime, updateSelectedTime] = useState([])
  const [selectedQuality, updateSelectedQuality] = useState([])

  const handleTimePress = (value) => {
    if (selectedTime.length > 0) {
      if (selectedTime.includes(value)) {
        updateSelectedTime((arr) => arr.filter((item, _) => item !== value))
      } else {
        selectedTime.pop()
        setTime(value)
      }
    } else {
      updateSelectedTime((arr) => [...arr, value])
      setTime(value)
    }
  }
  const handleQualityPress = (value) => {
    if (selectedQuality.length > 0) {
      if (selectedQuality.includes(value)) {
        updateSelectedQuality((arr) => arr.filter((item, _) => item !== value))
      } else {
        selectedQuality.pop()
        setQuality(value)
      }
    } else {
      updateSelectedQuality((arr) => [...arr, value])
      setQuality(value)
    }
  }
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
      <Text style={styles.strong}>{params.movie.title} </Text>
      <Text
        style={[
          styles.rating,
          {
            color:
              params.movie.rating === 'R'
                ? 'darkred'
                : params.movie.rating === 'G'
                ? 'lime'
                : 'white',
          },
        ]}
      >
        {params.movie.rating}
      </Text>

      <Separator />
      {/* <Text style={styles.title}> */}
      <Text style={styles.strong}>{params.location.fullName}</Text>
      {/* </Text> */}
      <Separator />
      <Text style={styles.title}>Pick a time ⏲️ </Text>
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
              onPress={(e) => handleTimePress(item.time)}
              style={
                selectedTime.includes(item.time)
                  ? styles.buttonPressed
                  : styles.button
              }
            >
              <Text style={styles.buttonText}>{item.time}</Text>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
      <Separator />
      <Text style={styles.title}>When? 📆 </Text>
      <DatePicker
        borderColor="#10AA15"
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
                handleQualityPress(item.q)
              }}
              style={
                selectedQuality.includes(item.q)
                  ? styles.buttonPressed
                  : styles.button
              }
            >
              <Text style={styles.buttonText}>{item.q}</Text>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
      <TouchableOpacity
        style={styles.orderButton}
        onPress={(e) => handleSubmit(e)}
      >
        <Text style={styles.orderButtonText}>Confirm Session</Text>
      </TouchableOpacity>
    </View>
  )
}

export default OrderForm

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0C4404',
    borderColor: '#10AA15',
    borderWidth: 2,
    borderRadius: 10,
    padding: 8,
    marginBottom: 5,
    marginLeft: 25,
    marginTop: 5,
  },
  buttonPressed: {
    backgroundColor: '#008080',
    borderWidth: 2,
    borderRadius: 10,
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
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    elevation: 1,
    marginHorizontal: 15,
    shadowColor: 'white',
    paddingTop: 10,
  },
  orderButton: {
    alignSelf: 'center',
    backgroundColor: '#008080',
    borderRadius: 10,
    height: 30,
    paddingTop: 5,
    marginBottom: 5,
    marginTop: 45,
    width: 180,
  },
  orderButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  rating: {
    alignSelf: 'center',
    backgroundColor: 'grey',
    borderRadius: 4,
    fontSize: 14,
    fontWeight: 'bold',
    height: 20,
    marginLeft: 5,
    marginTop: 5,
    textAlign: 'center',
    width: 30,
  },
  strong: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: 'bold',
    marginLeft: 5,
    marginRight: 5,
    textTransform: 'capitalize',
  },
  timeScroller: {
    alignSelf: 'center',
  },
  title: {
    alignSelf: 'center',
    borderColor: '#10AA15', //10AA15
    color: 'white',
    flex: 0,
    fontFamily: 'monospace',
    fontSize: 14,
    height: 'auto',
    paddingTop: 5,
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

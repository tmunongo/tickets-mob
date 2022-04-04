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
import DatePicker from 'react-native-date-picker'

const times = [
  { time: '14:15' },
  { time: '16:30' },
  { time: '18:00' },
  { time: '19:30' },
  { time: '20:30' },
  { time: '22:00' },
]

const OrderForm = (params) => {
  const [time, setTime] = useState('')
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  //   const handleSubmit = (e) => {
  //       e.preventdefault()
  //       props.action({
  //           screeningTime: time,
  //       })
  //   }

  return (
    <View style={styles.container}>
      <Separator />
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
      <Text style={styles.titleNoBorder}>Screening Times: </Text>
      <ScrollView
        bounces={false}
        contentContainerStyle={styles.timeScroller}
        horizontal={true}
        snapToInterval={30}
        showsHorizontalScrollIndicator={false}
      >
        {times.map((item, index) => {
          const inputRange = [(index - 1) * 30, index * 30, (index + 1) * 30]
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
      <Text style={styles.titleNoBorder}>Screening Day: </Text>
      <Button title="Open" onPress={() => setOpen(true)} />
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
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
    marginLeft: 25,
    marginRight: 10,
    padding: 5,
  },
  buttonText: {
    fontWeight: 'bold',
  },
  container: {
    backgroundColor: 'grey',
  },
  title: {
    marginLeft: 15,
    marginRight: 15,
    color: 'black',
    fontSize: 20,
  },
  titleNoBorder: {
    marginLeft: 15,
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

import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useState } from 'react'
import Constants from 'expo-constants'
import Separator from '../components/Separator'
import Screen from '../assets/screen'
import Seat from '../components/Seat'
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from 'react-native-table-component'

const SeatSelector = (props) => {
  // console.log(props)
  let orderDetails = props.route.params.params
  //state for previously selected seats
  const [selectedSeats, updateSelectedSeats] = useState(
    orderDetails.selectedSeats
  )
  // state for current user selection

  const [mySeats, updateMySeats] = useState([])
  const [total, setTotal] = useState(0)
  const [seatsAvailable, setSeatsAvailable] = useState(
    orderDetails.seatsAvailable
  )
  const [mySelected, updateMySelected] = useState(0)
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  let date = new Date(orderDetails.screeningDay).toLocaleDateString(
    undefined,
    options
  )
  function alertIndex(seat) {
    if (!mySeats.includes(seat)) {
      if (selectedSeats.includes(seat)) {
        alert('This seat is already selected')
      }
      if (mySelected >= 2) {
        alert('You can not select more than 2 seats')
      } else {
        updateMySeats((arr) => [...arr, seat])
        updateMySelected(mySelected + 1)
        setTotal(total + 10)
      }
    } else {
      setTotal(total - 10)
      updateMySeats((arr) => arr.filter((item, _) => item !== seat))
      updateMySelected(mySelected - 1)
    }
    // mySeats.push(seat)
    // console.log(mySeats)
    // alert(`This is seat: ${seat}`)
  }
  const element = (data, index) => {
    return (
      <TouchableOpacity onPress={() => alertIndex(data)}>
        <View
          style={
            selectedSeats.includes(data) || mySeats.includes(data)
              ? styles.btnSelected
              : styles.btn
          }
        >
          <Text style={styles.btnText}>{data}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.container}>
      <Separator />
      <Text style={styles.heading}>
        <Text style={{ textDecorationLine: 'underline' }}>Movie:</Text>{' '}
        {orderDetails.movie.title} {orderDetails.movie.year}
      </Text>
      <Separator />
      <Text style={styles.subHeading}>
        <Text style={{ textDecorationLine: 'underline' }}>Location:</Text>{' '}
        {orderDetails.location.username}
      </Text>
      <Separator />
      {/* <Text>Location: {orderDetails.location.address}</Text> */}
      <Text style={styles.info}>
        Date: {date} | Time: {orderDetails.screeningTime} | Quality:{' '}
        {orderDetails.quality}
      </Text>
      <Separator />
      <Text style={styles.info}>Select your seat below:</Text>
      <Screen width={380} height={50} style={{ justifyContent: 'center' }} />
      <Text
        style={{
          justifyContent: 'center',
          textAlign: 'center',
          marginBottom: 15,
          fontWeight: 'bold',
        }}
      >
        SCREEN
      </Text>
      <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
        {/* <Rows data={orderDetails.seatMap} textStyle={styles.text} /> */}
        {orderDetails.seatMap.map((rowData, index) => (
          <TableWrapper key={index} style={styles.row}>
            {rowData.map((cellData, cellIndex) => (
              // <TouchableOpacity onPress={() => alert('Pressed')}>
              <Cell
                key={cellIndex}
                data={cellIndex < 6 ? element(cellData, index) : cellData}
              />
              // </TouchableOpacity>
            ))}
          </TableWrapper>
        ))}
      </Table>
      <Text>You have selected {mySelected} seat(s).</Text>
      {/* <SeatMap width={360} height={300} style={{ justifyContent: 'center' }} /> 
      <FlatList
        data={orderDetails.seatMap}
        // keyExtractor={({ seatMap }) => seatMap.toString()}
        style={styles.feed}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => alert('Pressed' + item)}>
            <Seat seat={item} />
          </TouchableOpacity>
        )}
      /> */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.button}
          onPress={(e) =>
            props.navigation.navigate('PaymentScreen', {
              orderDetails,
              mySeats,
              total,
            })
          }
        >
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
        <Text style={styles.totalCost}>RMB {total}</Text>
      </View>
    </View>
  )
}

export default SeatSelector

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
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  btn: {
    height: 40,
    backgroundColor: 'dodgerblue',
  },
  btnSelected: {
    height: 40,
    backgroundColor: 'green',
  },
  btnText: {
    textAlign: 'center',
  },
  container: {
    top: Constants.statusBarHeight,
    margin: 10,
  },
  feed: {},
  footer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  info: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    backgroundColor: '#FFF1C1',
  },
  subHeading: {
    fontWeight: 'bold',
    fontSize: 20,
    textTransform: 'capitalize',
  },
  text: { justifyContent: 'center' },

  totalCost: {
    alignItems: 'center',
    borderColor: 'dodgerblue',
    borderRadius: 10,
    borderWidth: 3,
    flex: 0,
    fontSize: 24,
    fontWeight: 'bold',
    justifyContent: 'center',
    paddingLeft: 8,
    paddingTop: 4,
    marginLeft: 5,
    width: 90,
  },
})

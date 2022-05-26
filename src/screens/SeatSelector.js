import {
  FlatList,
  Dimensions,
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
      if (!selectedSeats.includes(seat)) {
        if (mySeats.length >= 2) {
          alert('You can not select more than 2 seats')
        } else {
          updateMySeats((arr) => [...arr, seat])
          updateMySelected(mySelected + 1)
          setTotal(total + 10)
        }
      } else {
        alert('This seat is already selected')
      }
    } else {
      setTotal(total - 10)
      updateMySeats((arr) => arr.filter((item, _) => item !== seat))
      updateMySelected(mySelected - 1)
    }
  }
  const element = (data, index) => {
    return (
      <TouchableOpacity onPress={() => alertIndex(data)}>
        <View
          style={
            mySeats.includes(data)
              ? styles.btnSelected
              : selectedSeats.includes(data)
              ? styles.preSelected
              : styles.btn
          }
        >
          <Text style={styles.btnText}>{data}</Text>
          <Text style={{ textAlign: 'center' }}>💺</Text>
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.container}>
      <Separator />
      <Text style={styles.heading}>
        <Text style={{ color: '#AAA642' }}>Movie </Text>{' '}
        {orderDetails.movie.title} {orderDetails.movie.year}
      </Text>
      <Separator />
      <Text style={styles.subHeading}>
        <Text style={{ color: '#AAA642' }}>Location </Text>{' '}
        {orderDetails.location.fullName}
      </Text>
      <Separator />
      {/* <Text>Location: {orderDetails.location.address}</Text> */}
      <Text style={styles.info}>
        Date: {date} | Time: {orderDetails.screeningTime} | Quality:{' '}
        {orderDetails.quality}
      </Text>
      <Separator />
      <Text style={styles.info}>Select your seat below</Text>
      <Screen width={380} height={50} style={{ justifyContent: 'center' }} />
      <Text
        style={{
          color: 'white',
          fontFamily: 'monospace',
          fontWeight: 'bold',
          justifyContent: 'center',
          marginBottom: 15,
          textAlign: 'center',
        }}
      >
        SCREEN
      </Text>
      <Table borderStyle={{ borderWidth: 2, borderColor: '#10AA15' }}>
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
    fontFamily: 'monospace',
    fontSize: 20,
    fontWeight: 'bold',
    flex: 0,
  },
  btn: {
    height: 40,
    backgroundColor: 'white',
    borderColor: '#10AA15',
    borderRadius: 10,
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    textAlignVertical: 'center',
  },
  btnSelected: {
    height: 40,
    backgroundColor: 'dodgerblue',
    borderColor: '#10AA15',
    borderRadius: 10,
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    textAlignVertical: 'center',
  },
  btnText: {
    fontFamily: 'monospace',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    backgroundColor: 'black',
    fontFamily: 'monospace',
    height: Dimensions.get('screen').height,
    padding: 10,
    top: Constants.statusBarHeight,
  },
  feed: {},
  footer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },
  heading: {
    textAlign: 'center',
    // borderColor: '#10AA15',
    // borderTopColor: '#10AA15',
    borderRadius: 5,
    borderWidth: 2,
    color: 'white',
    fontFamily: 'monospace',
    fontWeight: 'bold',
    fontSize: 22,
    paddingLeft: 10,
  },
  info: {
    color: 'white',
    fontFamily: 'monospace',
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 10,
    textAlign: 'center',
  },
  preSelected: {
    height: 40,
    backgroundColor: 'red',
    borderColor: '#10AA15',
    borderRadius: 10,
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    textAlignVertical: 'center',
  },
  row: {
    borderRadius: 5,
    backgroundColor: 'black',
    flexDirection: 'row',
    padding: 5,
  },
  subHeading: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'monospace',
    fontWeight: 'bold',
    fontSize: 18,
    paddingLeft: 10,
    textTransform: 'capitalize',
  },
  text: { justifyContent: 'center' },

  totalCost: {
    alignItems: 'center',
    borderColor: '#10AA15',
    borderRadius: 10,
    borderWidth: 3,
    color: 'white',
    flex: 0,
    fontFamily: 'monospace',
    fontSize: 24,
    fontWeight: 'bold',
    justifyContent: 'center',
    paddingLeft: 8,
    paddingTop: 4,
    marginLeft: 5,
    width: 90,
  },
})

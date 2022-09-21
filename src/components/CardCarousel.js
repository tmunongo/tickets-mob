import React from 'react'
import {
  Animated,
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native'

const OFFSET = 45
const ITEM_WIDTH = Dimensions.get('window').width - OFFSET * 4
const ITEM_HEIGHT = 350

export default function CardCarousel(props) {
  const scrollX = React.useRef(new Animated.Value(0)).current
  return (
    <View style={{ height: ITEM_HEIGHT, height: 370 }}>
      <ScrollView
        horizontal={true}
        decelerationRate={'normal'}
        snapToInterval={ITEM_WIDTH}
        bounces={false}
        style={styles.featured}
        showsHorizontalScrollIndicator={false}
        disableIntervalMomentum
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
      >
        {props.movies.MovieFeed.movies.map((item, index) => {
          const inputRange = [
            (index - 1) * ITEM_WIDTH,
            index * ITEM_WIDTH,
            (index + 1) * ITEM_WIDTH,
          ]
          const translate = scrollX.interpolate({
            inputRange,
            outputRange: [0.85, 1, 0.85],
          })
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.5, 1, 0.5],
          })
          return (
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('Locations', {
                  id: item.id,
                })
              }
            >
              <Animated.View
                key={item.id}
                style={{
                  width: ITEM_WIDTH,
                  height: ITEM_HEIGHT,
                  flex: 1,
                  marginLeft: index === 0 ? OFFSET : undefined,
                  marginRight:
                    index === props.movies.MovieFeed.movies.length - 1
                      ? OFFSET
                      : undefined,
                  opacity: opacity,
                  transform: [{ scale: translate }],
                }}
              >
                <ImageBackground
                  source={{ uri: item.poster }}
                  style={styles.poster}
                />
                {/* <Text>{item.title}</Text> */}
              </Animated.View>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  // card: {
  //     width: ITEM_WIDTH,
  //     height: ITEM_HEIGHT,
  //     flex: 1,
  //     marginLeft: index === 0 ? OFFSET : undefined,
  //     marginRight: index === cards.length - 1 ? OFFSET : undefined,
  //     opacity: opacity,
  //     transform: [{ scale: translate }],
  // },
  featured: {
    marginTop: 10,
    paddingHorizontal: 0,
    flex: 1,
  },
  poster: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    color: 'bisque',
    justifyContent: 'center',
  },
})

import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import TheaterScreen from './TheaterScreen';
//import Me from './MeScreen'

const Root = createStackNavigator();

const Screen2 = ({ navigation, route }) => (
  <View style={styles.screen}>
    <Text style={styles.title}>Screen 2</Text>
    <Button
      title="Go back"
      onPress={() => {
        navigation.pop();
      }}
    />
  </View>
);

export default function Movie() {
  return (
    <Root.Navigator>
      <Root.Screen name="Home" component={HomeScreen} />
      <Root.Screen name="Screen2" component={Screen2} />
    </Root.Navigator>
  );
}

const styles = StyleSheet.create({
  screen: {
    marginTop: 40,
    alignItems: 'center',
  },
  title: {
    padding: 20,
    fontSize: 42,
  },
});

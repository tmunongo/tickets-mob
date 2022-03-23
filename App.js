import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from '@react-navigation/native'
import Movies from './src/screens/Movies'
import Screens from './src/screens'
import MainApp from './src/Main'

export default function App() {
  return (
    <NavigationContainer>
      <MainApp />
    </NavigationContainer>
  )
}
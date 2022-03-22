import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from '@react-navigation/native'
import Movies from './src/screens/Movies'

export default function App() {
  return (
    <NavigationContainer>
      <Movies />
    </NavigationContainer>
  )
}
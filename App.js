import { View, Text , Image, ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import ProductWrapper from './src/Screens/ProductWrapper'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import REactSaga from './src/Screens/ReactSaga/REactSaga'
const Stack = createNativeStackNavigator(); 


const App = () => {

  return (
   <NavigationContainer>
    <Stack.Navigator>

      <Stack.Screen name='ProductWrapper'  component={ProductWrapper} options={{headerShown:false}}/>
   <Stack.Screen name='ReactSaga' component={REactSaga}/>
    </Stack.Navigator>
      
   </NavigationContainer>
  )
}

export default App
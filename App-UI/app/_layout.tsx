import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from "./Screens/HomeScreen"
 
const _layout = () => {
 const Stack  = createNativeStackNavigator() 
 return (
      <NavigationContainer independent={true}>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={HomeScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
 )
}

export default _layout
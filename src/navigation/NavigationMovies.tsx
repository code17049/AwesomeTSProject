import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { PaginaUno } from '../screens/PaginaUno';
import { PaginaDos } from '../screens/PaginaDos';
import { PaginaTres } from '../screens/PaginaTres';
import { HomeScreen } from '../screens/screensMovies/HomeScreen';
import { DetailScreen } from '../screens/screensMovies/DetailScreen';



const Stack = createStackNavigator();

export const NavigationMovies = () => {
    return (
        <Stack.Navigator
        initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: 'white' },
      }}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="DetailScreen" component={DetailScreen} />
        </Stack.Navigator>
      );
}

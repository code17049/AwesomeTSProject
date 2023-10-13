import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { PaginaUno } from '../screens/PaginaUno';
import { PaginaDos } from '../screens/PaginaDos';
import { PaginaTres } from '../screens/PaginaTres';

const Stack = createStackNavigator();
export const StackNavigation = () => {
    return (
        <Stack.Navigator
        initialRouteName="Home"
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'green' },
      }}>
          <Stack.Screen name="PaginaUno" component={PaginaUno} />
          <Stack.Screen name="PaginaDos" component={PaginaDos} />
          <Stack.Screen name="PaginaTres" component={PaginaTres} />
        </Stack.Navigator>
      );
}

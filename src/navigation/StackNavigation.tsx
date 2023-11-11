import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { PaginaUno } from '../screens/PaginaUno';
import { PaginaDos } from '../screens/PaginaDos';
import { PaginaTres } from '../screens/PaginaTres';

export type RootStackParams = {
  PaginaUno: undefined,
  PaginaDos: {id: number, nombre: string},
  PaginaTres: undefined
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigation = () => {
    return (
        <Stack.Navigator
        initialRouteName="PaginaUno"
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

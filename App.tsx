import 'react-native-gesture-handler';


import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { HolaMundoScreen } from './src/screens/HolaMundoScreen'
import { Contador } from './src/screens/Contador';
import { Estilos } from './src/screens/Estilos';
import { EjerciciosEstilos } from './src/screens/EjerciciosEstilos';
import { Calculadora } from './src/screens/Calculadora';

import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './src/navigation/StackNavigation';


export const App = () => {
  return(
    
    <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer>
  );
}

import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { HolaMundoScreen } from './src/screens/HolaMundoScreen'
import { Contador } from './src/screens/Contador';
import { Estilos } from './src/screens/Estilos';

export const App = () => {
  return(
    <SafeAreaView style={{flex:1}}>
      <Estilos/>
    </SafeAreaView>
    
  );
}

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
import { MyDrawer } from './src/navigation/MyDrawer';
import { AuthProvider } from './src/context/AuthContext';


export const App = () => {
  return(
    
    <NavigationContainer>
      <AppState>
        {/* <StackNavigation/> */}
        <MyDrawer/>
      </AppState>
      
    </NavigationContainer>
  );
}

const AppState = ({children}: any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
}
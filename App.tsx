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
import { NavigationMovies } from './src/navigation/NavigationMovies';


export const App = () => {
  return(
    
    <NavigationContainer>
      <NavigationMovies/>
      {/* <AppState>
        <MyDrawer/>
      </AppState> */}
      
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
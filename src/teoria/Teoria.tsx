 // Ctrl + P = Go to File

 
 ////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////
  // PRIMERA PARTE

import { useRef, useState } from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
/*
    Tipos de Instalacion
      Modo de desarrollo
    Tipos
    Objetos Literales
        Interfaces
            Diferencias entre Type, Interface, Class
            Class: Sirve para representar Instancias
            Interface: Mas facil de expandir que el Type, No se pueden instanciar
            Type: Mas Dificil de Expandir
    
    useState
    Hooks
    */
  

    /* 
    Probando Experimento de las 10 000 H para volverte un Experto
    Probandolo en Desarrollo movil e IA
    2022 -> 80H
    2023 -> 100H + ...
    */

// Configuraciones
  //Instalaciones
  //Variables de entorno
  //Visual studio code y sus Pluguins para Typescript y React Native
  //Configuracion de Slintrc y Prettier

  // Tpos de datos
  // Funciones
  // Estructuras repetitivas y de seleccion
  
// hacer Hola Mundo

  //TEXT
  <Text
    numberOfLines={1}
    adjustsFontSizeToFit={true}
  ></Text>

// Funciones
const miFuncion = () => {
  first.includes('-');
  first.replace("-", "")
  first.startsWith("0")
  first.endsWith('.')
  // Borra el ultimo elemento de la cadena.
  first.slice(0,-1)
}

// UseState
const [first, setfirst] = useState('0');
// Conversion de un tipo proveniente de un useState
const num1 = Number(first);

// enum
enum Operadores {
  sumar, restar, multiplicar, dividir
}
const operacionActual = useRef<Operadores>();
// Definimos la operacion actual
operacionActual.current = Operadores.dividir

// 

// Funtional Components
/* rafc */

// USB Debuguin
// Button, TouchableHighlight...

// Styles
const styles = StyleSheet.create({
    fabLocation: {
        position: 'absolute',
        bottom: 25,
    },
});

// Hacer contador con un boton configurable

// Interfaces
interface Props {
    title: string,
    posicion: 'R' | 'L',
    onPress: () => void,
}


// Componente Funcional - Boton reutilizable con propiedades personalizadas
// Pasarle una funcion como propiedad a un componente

// Estilos condicionales
{/* <TouchableOpacity 
      style={
        (posicion === 'R') 
            ? styles.fabLocationR 
            : styles.fabLocationL
      } 
    onPress={onPress}>
</TouchableOpacity> */}

{/* <TouchableOpacity 
      style={
        [
          styles.fabLocation,
          (posicion === 'R') ? styles.right : styles.left
        ]
      } 
      onPress={onPress}>
</TouchableOpacity> */}

// Box Object Model
  // Alto, ancho, margen, padding, borde
// Position
  // Absolute, relative, top, bottom, left, rigth
// Flex Box
  // Direccion, Ubicacion, alineamiento, estirar, encoger, proporciones

  // Estilos porcentuales
  const stylesDos = StyleSheet.create({
    etiqueta: {
        width: '25%',
        height: '25%'
    },
  });

  // Dimenciones del dispositivo
  const {width, height} = Dimensions.get('window');










  ////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////
  // SEGUNDA PARTE

  // TIPOS DE NAVEGACION
  // Stack Navigation
    // navigation.pop = Destruye ultima pantalla
    // popToTop = ir la la primera pantalla
    // goBack
  // Drawer Navigation
    // 
  // BottomTab Navigation
  // MaterialTop Navigation
  // Mandar informacion entre pantallas.
  // Componente Store (Context)  
  // useReducer y useState - 
  //      Funcionan para exactamente lo mismo pero el useReducer 
  //      se utilizar para modificar contextos mucho mas elaborados
  
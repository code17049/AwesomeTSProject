import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface Props {
    titulo: string,
    position: 'R' | 'L'
    onPress: () => void
}

export const Botones = ({titulo, position, onPress}: Props) => {

  return (
    <TouchableOpacity style={
      [styles.flotanteUbicacion, (position === 'R') 
        ? styles.derecha 
        : styles.izquierda]
      } 
    onPress={onPress}>
        <View style={styles.flotanteView}>
          <Text style={styles.flotanteText}>{titulo}</Text>
        </View>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    flotanteUbicacion: {
      position: 'absolute',
      bottom: 25,
    },
   
    derecha: {
      right: 25
    },
    izquierda: {
      left: 25
    },
    flotanteView: {
      width: 70,
      height: 70,
      backgroundColor: '#0B0A0A',
      justifyContent: 'center',
      borderRadius: 100
    },
    flotanteText: {
      color: 'white',
      alignSelf: 'center',
      fontSize: 25
    }

  });
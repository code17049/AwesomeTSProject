import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface Props {
    title: string,
    posicion: string
}

export const Botones = ({title}: Props) => {
  return (
    <TouchableOpacity style={[styles.fabLocation, styles.right]} onPress={() => console.log({title})}>
          <View style={styles.fab}> 
            <Text style={styles.fabText}>{title}</Text>
          </View>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    fabLocation: {
        position: 'absolute',
        bottom: 25,
      },
      right: {
          right: 25
      },
      left: {
          left: 25
      },
      fab: {
          width: 60,
          height: 60,
          borderRadius: 100,
          backgroundColor: '#98673D',
          justifyContent: 'center',
      },
      fabText: {
          color: 'white',
          fontSize: 25,
          fontWeight: 'bold',
          alignSelf: 'center',
      },
      button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
      },
      countText: {
        color: '#FF00FF',
      }
});

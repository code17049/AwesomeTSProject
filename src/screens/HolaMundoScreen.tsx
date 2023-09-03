import React from 'react'
import { Text, View } from 'react-native'

export const HolaMundoScreen = () => {
  return (
    <View style={{
        flex:1,
        justifyContent: 'center',
        backgroundColor: 'white'
      }} >
        <Text style={{
          fontSize: 40,
          textAlign: 'center'
        }}>Suscribanse</Text>
      </View>
  )
}

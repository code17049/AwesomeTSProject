import React, { useState } from 'react'
import { Alert, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export const Contador = () => {
    const [contador, setContador] = useState(0);
  return (
    <View style={styles.container} >
      <Text style={{
          fontSize: 40,
          textAlign: 'center'
      }}>Contador: {contador}</Text>
      <Button
        title="Press me"
        onPress={() => setContador(contador + 1)}
      />

      <TouchableOpacity style={styles.flotanteUbicacion} onPress={() => setContador(contador + 1)}>
        <View style={styles.flotanteView}>
          <Text style={styles.flotanteText}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
  },
  flotanteUbicacion: {
    position: 'absolute',
    bottom: 25,
    right: 25
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

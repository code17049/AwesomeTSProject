import React, { useState } from 'react'
import { Alert, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Botones } from '../components/Botones';

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

      <Botones
        titulo='+'
        position='L'
        onPress={() => setContador(contador + 1)}
      />

      {/* <TouchableOpacity style={styles.flotanteUbicacion} onPress={() => setContador(contador + 1)}>
        <View style={styles.flotanteView}>
          <Text style={styles.flotanteText}>+</Text>
        </View>
      </TouchableOpacity> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
  },
  

});

import React, { useState } from 'react'
import { View, Text, Button, Alert, TouchableWithoutFeedback, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native'
import { Botones } from '../components/Botones';

export const Contador = () => {
    const [contador, setContador] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={{
          fontSize: 40,
          textAlign: 'center'
      }}>Contador: {contador}</Text>
      <Button
          title="Press me"
          color="#f194ff"
          onPress={() => setContador(contador + 1)}
        />
      <Botones 
        title='-'
        posicion='r'
      />
     
      {/* <TouchableWithoutFeedback onPress={() => setContador(contador + 1)}>
          <View style={styles.button}>
            <Text>Touch Here</Text>
          </View>
      </TouchableWithoutFeedback>
      <TouchableOpacity style={[styles.fabLocation, styles.right]} onPress={() => setContador(contador + 1)}>
          <View style={styles.fab}> 
            <Text style={styles.fabText}>+</Text>
          </View>
      </TouchableOpacity> */}
      

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  
});

import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import {StackScreenProps} from '@react-navigation/stack'
import { RootStackParams } from '../navigation/StackNavigation';

interface Props extends StackScreenProps<RootStackParams,'PaginaDos'>{};

/* interface Parametros {
  id: number,
  nombre: string
} */

export const PaginaDos = ({navigation, route}:Props) => {
  /* const params = route.params as Parametros; */
  const params = route.params ;
  useEffect(() => {
    navigation.setOptions({
      title: params.nombre
    })
  }, [])
  
  return (
    <View>
        {/* IR ATRAS */}
        <Button
        title='Go to Page 1'
        onPress={()=>navigation.pop()}
        />
        {/* IR ATRAS */}
        <Button
        title='Go to Page 1'
        onPress={()=>navigation.goBack()}
        />
        <Button
        title='Go to Page 3'
        onPress={()=>navigation.navigate('PaginaTres')}
        />
        <Text>
          {JSON.stringify(params, null, 3)}
        </Text>
    </View>
  )
}

// GRACIAS ESO ES TODO EN LA PARTE 1 
// YA VIENE LA PARTE 2

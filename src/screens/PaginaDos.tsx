import React from 'react'
import { View, Text, Button } from 'react-native'
import {StackScreenProps} from '@react-navigation/stack'

interface Props extends StackScreenProps<any,any>{};
export const PaginaDos = ({navigation}:Props) => {
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
    </View>
  )
}

// GRACIAS ESO ES TODO EN LA PARTE 1 
// YA VIENE LA PARTE 2

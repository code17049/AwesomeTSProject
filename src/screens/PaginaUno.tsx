import React from 'react'
import { View, Text, Button } from 'react-native'
import {StackScreenProps} from '@react-navigation/stack'

// IMPORTANTE
interface Props extends StackScreenProps<any,any>{};

export const PaginaUno = ({navigation}: Props) => {
  return (
    <View>
        <Button
        title='Go to Page 2'
        onPress={()=>navigation.navigate('PaginaDos', {
          id: 1,
          nombre: 'Virtuals Me gusta'
        })}
        />
    </View>
  )
}

import React from 'react'
import { View, Text, Button } from 'react-native'
import {StackScreenProps} from '@react-navigation/stack'

interface Props extends StackScreenProps<any,any>{};
export const PaginaTres = ({navigation}:Props) => {
  return (
    <View>
      {/* Go Home */}
         <Button
        title='Go Home'
        onPress={()=>navigation.popToTop()}
        />
    </View>
  )
}

import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Button, Text, View } from 'react-native'
import { useMovie } from '../../hooks/useMovie'

interface Props extends StackScreenProps<any,any>{};

export const HomeScreen = ({navigation}:Props) => {
  
  const {peliculasActuales, isLoading} = useMovie();

  if(isLoading){
    return (
      <ActivityIndicator color={'black'} size={'large'}/>
    )
  }

  if(isLoading == false){
    return (
      <View>
          <Text> HOME SCREEN </Text>
          
          <Button
          title='DETAILS'
          onPress={()=>navigation.navigate('DetailScreen')}
          />
          <Text>
            {JSON.stringify(peliculasActuales[2]?.title, null, 4)}
          </Text>    
      </View>
    )
  }
}

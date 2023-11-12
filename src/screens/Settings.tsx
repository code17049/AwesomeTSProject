import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { AuthContext } from '../context/AuthContext'

export const Settings = () => {
  const context = useContext(AuthContext)
  return (
    <View style={{
      flex:1,
      //justifyContent: 'center',
      backgroundColor: 'white'
    }} >
      <Text style={{
        fontSize: 20,
        //textAlign: 'center'
      }}>{JSON.stringify(context, null, 4)}</Text>

    </View>
  )
}

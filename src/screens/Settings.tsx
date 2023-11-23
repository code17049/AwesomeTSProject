import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import Icon from 'react-native-vector-icons/Ionicons'

export const Settings = () => {
  const context = useContext(AuthContext)
  const {authState} = useContext(AuthContext)
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

      {
        authState.favoriteIcon ? <Icon name={authState.favoriteIcon} size={40} style={{alignSelf: 'center'}}></Icon> : null
      }
    </View>
  )
}

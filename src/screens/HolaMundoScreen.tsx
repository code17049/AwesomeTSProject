import React, {useContext} from 'react'
import { Text, View, Button } from 'react-native';
import { MyTabs } from '../navigation/MyTabs'
import { AuthContext } from '../context/AuthContext'

export const HolaMundoScreen = () => {
  const {singIn, authState} = useContext(AuthContext)
  return (
    <View style={{
        flex:1,
        justifyContent: 'center',
        backgroundColor: 'white'
      }} >
        <Text style={{
          fontSize: 40,
          textAlign: 'center'
        }}>Suscribanse</Text>
        {
          !authState.isLogig ? <Button title='singIn' onPress={()=>singIn()}/> : null
        }
        
              

      </View>
  ) 
}

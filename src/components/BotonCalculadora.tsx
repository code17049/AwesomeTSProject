import React from 'react'
import { Text, Touchable, TouchableOpacity, View } from 'react-native'

interface Props {
    numeroTexto: string,
    color: string,
    action: (numeroTexto: string) => void;
}

export const BotonCalculadora = ({numeroTexto, color, action}: Props) => {
  return (
    <TouchableOpacity style={{
        width: 70,
        height: 70,
        backgroundColor: color,
        borderRadius: 100,
        
    }}
   onPress={() => action(numeroTexto)} 
    >
        <View style={{
            flex:1,
            justifyContent: 'center',
            // alignItems: 'center',

        }}>
            <Text style={{
                alignSelf: 'center',
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white'
            }}>{numeroTexto}</Text>
        </View>
    </TouchableOpacity>
  )
}

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Dimensions} from 'react-native';

export const Estilos = () => {
    const {width, height} = Dimensions.get('window');
    return (
        <View style={style.container}>
            <Text style={style.caja1}>{width}</Text>
            <Text style={style.caja2}>{height}</Text>
            <Text style={style.caja3}></Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: 'black'
        alignItems: 'center',
        justifyContent: 'center',
        //flexDirection: 'column',
        
    },
    caja1: {
        //flex: 20,
        padding: 5,
        borderWidth: 2,
        margin: 5,
        fontSize: 25,
        width: 100,
        height: 100,
        backgroundColor: '#E1DCDC',
        position: 'relative',

    },
    caja2: {
        //flex: 40,
        padding: 5,
        borderWidth: 2,
        margin: 5,
        fontSize: 25,
        width: 100,
        height: 100,
        backgroundColor: '#E1DCDC',
        position: 'relative',
        
    },
    caja3: {
        //flex: 70,
        //padding: 5,
        borderWidth: 2,
        margin: 5,
        fontSize: 25,
        width: 100,
        height: 100,
        backgroundColor: '#E1DCDC',
        position: 'relative'
        
    },
    
});

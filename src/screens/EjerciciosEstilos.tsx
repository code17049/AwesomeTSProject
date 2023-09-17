import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native';

export const EjerciciosEstilos = () => {
    const {width, height} = Dimensions.get('window');
    return (
        <View style={style.container}>
            <Text style={style.caja1}></Text>
            <Text style={style.caja2}></Text>
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
        flexDirection: 'column',
        backgroundColor: '#8F4E81'
    },
    caja1: {
        //flex: 25,
        //padding: 5,
        borderWidth: 5,
        borderColor: '#FFFFFF',
        //margin: 5,
        fontSize: 25,
        width: 100,
        height: 100,
        backgroundColor: '#3362BF',
        //position: 'relative',
        //alignSelf: 'flex-end'
        bottom: -100,
        right: 100

    },
    caja2: {
        //flex: 25,
        //padding: 5,
        borderWidth: 5,
        borderColor: '#ffffff',
        //margin: 5,
        fontSize: 25,
        width: 100,
        height: 100,
        backgroundColor: '#D16813',
        //left: 100,
        bottom: -50
        //position: 'relative',
        //alignSelf: 'center'
        
    },
    caja3: {
        //flex: 50,
        //padding: 5,
        borderWidth: 5,
        borderColor: '#ffffff',
        //margin: 5,
        fontSize: 25,
        width: 100,
        height: 100,
        backgroundColor: '#8DC3D1',
        top: -100,
        left: 100
        //position: 'relative'
        //alignSelf: 'center'
        
    },
    
});

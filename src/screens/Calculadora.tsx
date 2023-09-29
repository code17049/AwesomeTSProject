import React, { useRef, useState } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import { BotonCalculadora } from '../components/BotonCalculadora'

enum Operadores {
    sumar, restar, multiplicar, dividir
}

export const Calculadora = () => {

    const [numero, setNumero] = useState('0');
    const [numeroAnterior, setNumeroAnterior] = useState('0');
    const operacionActual = useRef<Operadores>()

    const btnMultiplicar = () => {
        cambiarNumeroAnterior();
        operacionActual.current = Operadores.multiplicar
    }

    const btnDividir = () => {
        cambiarNumeroAnterior();
        operacionActual.current = Operadores.dividir
    }

    const btnSumar = () => {
        cambiarNumeroAnterior();
        operacionActual.current = Operadores.sumar
    }

    const btnRestar = () => {
        cambiarNumeroAnterior();
        operacionActual.current = Operadores.restar
    }

    const btnCalcular = () => {
        const num1 = Number(numero);
        const num2 = Number(numeroAnterior);
        switch (operacionActual.current) {
            case Operadores.multiplicar:
                setNumero(`${num1 * num2}`)
                break;

            case Operadores.dividir:
                setNumero(`${num2 / num1}`)
                break;

            case Operadores.sumar:
                setNumero(`${num1 + num2}`)
                break;

            case Operadores.restar:
                setNumero(`${num2 - num1}`)
                break;
            
        
            default:
                break;
        }
        setNumeroAnterior('0')
    }

    const limpiar = () => {
        setNumero('0');
        setNumeroAnterior('0');
    }

    const signo = () => {
        if(numero.startsWith('-')){
            setNumero(numero.replace('-', ''));
        }else(
            setNumero('-' + numero)
        )
    }

    const construirNumero = (numeroTexto: string) => {
        if(numero.includes('.') && numeroTexto === '.') return

        
        
        if(numero.startsWith('0') || numero.startsWith('-0')){
            // Aceptar 0.
            if(numeroTexto === '.'){
                setNumero(numero + numeroTexto)
            // Qutar el cero de un numero entero
            }else if(numeroTexto !== '0' && numero.startsWith('0') && numero.length === 1){
                setNumero(numeroTexto);
            }
            // Aceptar 0.0
            else if(numeroTexto === '0' && numero.includes('.')){
                setNumero(numero + numeroTexto)
            // Aceptar 0.1
            }else if(numeroTexto !== '0' && numero.includes('.')) {
                setNumero(numero + numeroTexto)
            // Todas las demas entradas
            }else(
                setNumero(numero + numeroTexto)
            )

          // No es necesario Pero no esta demas acegurarnos xD de que el
          // if devuelva algo xD  
        }else(
            setNumero(numero + numeroTexto)
        )
        
    }

    // Boton delete
    const btnDelete = () => {
        let negativo: string = '';
        let numTem = numero;
        if(numTem.includes('-')){
            negativo = '-';
            numTem = numTem.replace('-', '');
        }

        if(numTem.length > 1){
            setNumero(negativo + numTem.slice(0,-1))
        }else{
            setNumero('0')
        }
    }

    const cambiarNumeroAnterior = () => {
        if(numero.endsWith('.')){
            setNumeroAnterior(numero.replace('.',''))
        }else{
            setNumeroAnterior(numero);
        }

        setNumero('0')
    }

  return (
    <View style = {{
        flex: 1,
        justifyContent: 'flex-end'
    }}>







        <View style={{
            flexDirection: 'column',
            alignItems: 'flex-end',
            //padding: 2,
            right: 25,
            bottom: 10
        
        
        }}>
            <Text style={{
            //alignItems: 'flex-end'
            fontSize: 25,
            fontWeight: 'bold'
        }}>{numeroAnterior}</Text>
        </View>



        <View style={{
            flexDirection: 'column',
            alignItems: 'flex-end',
            //padding: 25,
            right: 25,
            bottom: 10
        
        }}>
            <Text style={{
            //alignItems: 'flex-end'
            fontSize: 35,
            fontWeight: 'bold',
        }}
        numberOfLines={1}
        adjustsFontSizeToFit
        >{numero}</Text>
        </View>

        

    <View style={{
        flexDirection: 'column',
        
    }}>
        <View style ={estiloBoton.boton}>
            <BotonCalculadora
                numeroTexto='C'
                color='#5C8374'
                action = {limpiar}
            />
            <BotonCalculadora
                numeroTexto='+/-'
                color='#5C8374'
                action = {signo}
            />
            <BotonCalculadora
                numeroTexto='Del'
                color='#5C8374'
                action = {btnDelete}
            />
            <BotonCalculadora
                numeroTexto='/'
                color='#5C8374'
                action = {btnDividir}
            />
        </View>

    </View>








    
    <View style={{
        flexDirection: 'column',
        
    }}>
        <View style ={estiloBoton.boton}>
            <BotonCalculadora
                numeroTexto='1'
                color='#61677A'
                action = {() => construirNumero('1')}
                
            />
            <BotonCalculadora
                numeroTexto='2'
                color='#61677A'
                action = {() => construirNumero('2')}
            />
            <BotonCalculadora
                numeroTexto='3'
                color='#61677A'
                action = {() => construirNumero('3')}
            />
            <BotonCalculadora
                numeroTexto='X'
                color='#5C8374'
                action = {btnMultiplicar}
            />
        </View>

    </View>






    <View style={{
        flexDirection: 'column',
        
    }}>
        <View style ={estiloBoton.boton}>
            <BotonCalculadora
                numeroTexto='4'
                color='#61677A'
                action = {() => construirNumero('4')}
                
            />
            <BotonCalculadora
                numeroTexto='5'
                color='#61677A'
                action = {() => construirNumero('5')}
            />
            <BotonCalculadora
                numeroTexto='6'
                color='#61677A'
                action = {() => construirNumero('6')}
            />
            <BotonCalculadora
                numeroTexto='+'
                color='#5C8374'
                action = {btnSumar}
            />
        </View>

    </View>








    <View style={{
        flexDirection: 'column',
        
    }}>
        <View style ={estiloBoton.boton}>
            <BotonCalculadora
                numeroTexto='7'
                color='#61677A'
                action = {() => construirNumero('7')}
                
            />
            <BotonCalculadora
                numeroTexto='8'
                color='#61677A'
                action = {() => construirNumero('8')}
            />
            <BotonCalculadora
                numeroTexto='9'
                color='#61677A'
                action = {() => construirNumero('9')}
            />
            <BotonCalculadora
                numeroTexto='-'
                color='#5C8374'
                action = {btnRestar}
            />
        </View>

    </View>






    <View style={{
        flexDirection: 'column',
        
    }}>
        <View style ={estiloBoton.boton}>
            <BotonCalculadora
                numeroTexto='%'
                color='#5C8374'
                action = {()=>{}}
            />
            <BotonCalculadora
                numeroTexto='0'
                color='#61677A'
                action = {construirNumero}
            />
            <BotonCalculadora
                numeroTexto='.'
                color='#61677A'
                action = {construirNumero}
            />
            <BotonCalculadora
                numeroTexto='='
                color='#5C8374'
                action = {btnCalcular}
            />
        </View>

    </View>


    </View>
  )
}

const estiloBoton = StyleSheet.create({
    boton: {
        //flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
});

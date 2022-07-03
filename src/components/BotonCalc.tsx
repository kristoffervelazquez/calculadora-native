import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


interface Props {
    texto: string,
    color?: | '#9B9B9B' | '#2D2D2D' | '#FF9427',
    ancho?: boolean,
    action: (numero: string) => void;
}


const BotonCalc = ({ texto, color = '#2D2D2D', ancho = false, action }: Props) => {
    return (
        <TouchableOpacity onPress={() => {action(texto)}}>
            <View style={{ ...styles.boton, backgroundColor: color, width: (ancho ? 180 : 80) }}>
                <Text style={{ ...styles.botonTexto, color: (color === '#9B9B9B' ? 'black' : 'white') }}>{texto}</Text>
            </View>
        </TouchableOpacity>

    )
}

export default BotonCalc;

const styles = StyleSheet.create({
    boton: {
        height: 80,
        width: 80,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10
    },
    botonTexto: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        fontWeight: '400'
    },
})
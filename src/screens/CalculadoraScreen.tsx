import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import BotonCalc from '../components/BotonCalc';

const CalculadoraScreen = () => {


    const [numero, setNumero] = useState('0');
    const [numeroAnterior, setNumeroAnterior] = useState('0');



    const limpiar = () => {
        setNumero('0');
        setNumeroAnterior('0')
    }


    const armarNumero = (numeroTexto: string) => {
        setNumero(numero + numeroTexto)
    }

    return (
        <View style={styles.calculadoraContainer}>
            <Text style={styles.resultadoSmall}>{numeroAnterior}</Text>
            <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>{numero}</Text>
            {/* Fila de botones */}
            <View style={styles.fila}>
                <BotonCalc texto='C' color='#9B9B9B' action={limpiar} />
                <BotonCalc texto='+/-' color='#9B9B9B' action={limpiar}/>
                <BotonCalc texto='DEL' color='#9B9B9B' action={limpiar}/>
                <BotonCalc texto='/' color='#FF9427' action={limpiar}/>
            </View>
            <View style={styles.fila}>
                <BotonCalc texto='7' action={armarNumero} />
                <BotonCalc texto='8' action={armarNumero}/>
                <BotonCalc texto='9' action={armarNumero}/>
                <BotonCalc texto='X' color='#FF9427' action={limpiar}/>
            </View>
            <View style={styles.fila}>
                <BotonCalc texto='4' action={armarNumero}/>
                <BotonCalc texto='5' action={armarNumero}/>
                <BotonCalc texto='6' action={armarNumero}/>
                <BotonCalc texto='-' color='#FF9427' action={limpiar}/>
            </View>
            <View style={styles.fila}>
                <BotonCalc texto='1' action={armarNumero}/>
                <BotonCalc texto='2' action={armarNumero}/>
                <BotonCalc texto='3' action={armarNumero}/>
                <BotonCalc texto='+' color='#FF9427' action={limpiar} />
            </View>
            <View style={styles.fila}>
                <BotonCalc texto='0' ancho action={armarNumero} />
                <BotonCalc texto='+/-' action={limpiar}/>
                <BotonCalc texto='=' color='#FF9427' action={limpiar}/>
            </View>
        </View>
    )
}

export default CalculadoraScreen

const style = StyleSheet.create({})
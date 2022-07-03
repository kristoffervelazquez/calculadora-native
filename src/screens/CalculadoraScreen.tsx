import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import BotonCalc from '../components/BotonCalc';

const CalculadoraScreen = () => {
    return (
        <View style={styles.calculadoraContainer}>
            <Text style={styles.resultadoSmall}>1500.000</Text>
            <Text style={styles.resultado}>1,500.000</Text>
            {/* Fila de botones */}
            <View style={styles.fila}>
                <BotonCalc texto='C' color='#9B9B9B' />
                <BotonCalc texto='+/-' color='#9B9B9B' />
                <BotonCalc texto='DEL' color='#9B9B9B' />
                <BotonCalc texto='/' color='#FF9427' />
            </View>
            <View style={styles.fila}>
                <BotonCalc texto='7' />
                <BotonCalc texto='8' />
                <BotonCalc texto='9' />
                <BotonCalc texto='X' color='#FF9427' />
            </View>
            <View style={styles.fila}>
                <BotonCalc texto='4' />
                <BotonCalc texto='5' />
                <BotonCalc texto='6' />
                <BotonCalc texto='-' color='#FF9427' />
            </View>
            <View style={styles.fila}>
                <BotonCalc texto='1' />
                <BotonCalc texto='2' />
                <BotonCalc texto='3' />
                <BotonCalc texto='+' color='#FF9427' />
            </View>
            <View style={styles.fila}>
                <BotonCalc texto='0' ancho />
                <BotonCalc texto='+/-' />
                <BotonCalc texto='=' color='#FF9427' />
            </View>
        </View>
    )
}

export default CalculadoraScreen

const style = StyleSheet.create({})
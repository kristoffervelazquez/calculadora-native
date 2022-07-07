import { useRef, useState } from 'react'



enum Operadores {
    sumar, resta, multiplicar, dividir
}


export const useCalculadora = () => {

    const [numero, setNumero] = useState('0');
    const [numeroAnterior, setNumeroAnterior] = useState('0');
    const ultimaOperacion = useRef<Operadores>();


    const limpiar = () => {
        setNumero('0');
        setNumeroAnterior('0')
    }


    const armarNumero = (numeroTexto: string) => {

        //No aceptar doble punto
        if (numero[numero.length - 1] === '.' && numeroTexto === '.') return;

        if (numero.startsWith('0') || numero.startsWith('-0')) {
            // Punto decimal
            if (numeroTexto === '.') {
                setNumero(numero + numeroTexto);

                // Evaluar si es otro cero y hay un punto
            } else if (numeroTexto === '0' && numero.includes('.')) {
                setNumero(numero + numeroTexto)
                //Evaluar si es difertente de cero y no tiene un punto
            } else if (numeroTexto !== '0' && !numero.includes('.')) {
                setNumero(numeroTexto)

            } else if (numeroTexto === '0' && !numero.includes('.')) {
                setNumero(numero)
            } else {
                setNumero(numero + numeroTexto)
            }

        } else {
            setNumero(numero + numeroTexto)
        }

    }

    const positivoNegativo = () => {
        if (numero.includes('-')) {
            setNumero(numero.replace('-', ''));
        } else {
            setNumero('-' + numero)
        }
    }

    const btnDelete = () => {
        if (numero.length === 1 || numero[numero.length - 2] === '-') {
            setNumero('0')
        } else {
            setNumero(numero.slice(0, -1))
        }
    }



    const cambiarNumeroPorAnterior = () => {
        if (numero.endsWith('.')) {
            setNumeroAnterior(numero.slice(0, -1));
        } else {
            setNumeroAnterior(numero);
        }
        setNumero('0')
    }

    const btnDividir = () => {
        cambiarNumeroPorAnterior();
        ultimaOperacion.current = Operadores.dividir
    }

    const btnMultiplicar = () => {
        cambiarNumeroPorAnterior();
        ultimaOperacion.current = Operadores.multiplicar
    }
    const btnSumar = () => {
        cambiarNumeroPorAnterior();
        ultimaOperacion.current = Operadores.sumar
    }
    const btnRestar = () => {
        cambiarNumeroPorAnterior();
        ultimaOperacion.current = Operadores.resta
    }


    const calcular = () => {
        const num1 = Number(numero);
        const num2 = Number(numeroAnterior);

        switch (ultimaOperacion.current) {
            case Operadores.sumar:
                setNumero((num1 + num2).toString())
                break;
            case Operadores.resta:
                setNumero((num2 - num1).toString())
                break;
            case Operadores.multiplicar:
                setNumero((num1 * num2).toString())
                break;
            case Operadores.dividir:
                setNumero((num2 / num1).toString())
                break;
        }

        setNumeroAnterior('0');

    }


    return {
        numero, numeroAnterior, limpiar, calcular, btnDelete, btnDividir, btnMultiplicar, btnSumar, btnRestar, armarNumero, positivoNegativo
    }

}
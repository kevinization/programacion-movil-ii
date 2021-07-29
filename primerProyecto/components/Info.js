import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const nombre = "kevin";

export default function Info(props) {
    console.log(props);
    const [click, setClick] = useState(0);
    useEffect(() => {
        console.log(`El valor a cambiado a ${click}`)
    }, [click])
    const { info } = props;
    const { nombre, apellido, edad, fun } = info;
    return (
        <View>
            {/* <Text>Hola {props.nombre} {props.apellido}</Text> */}
            {/* <Text>Hola {props.info.nombre} {props.info.apellido}</Text> */}
            <Text>Hola {nombre} {apellido}</Text>
            <Button title="Mostrar alerta de nombre" onPress={() => fun(nombre, edad)}></Button>
            <Text>Número de clicks: {click}</Text>
            <Button title="Clicks" onPress={() => setClick(click + 1)}></Button>
        </View>
    )
}

const styles = StyleSheet.create({})

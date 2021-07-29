import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { Header } from 'react-native-elements'

/*KEVIN HUMBERTO RODARTE LEYVA, 9A ISW*/

export default function Componente() {

    const [ofus, setOfus] = useState("");
    const [desofus, setDesofus] = useState("");
    function ofuscar(ofus) {
        ofus = ""
        for (var i = 0; i < nombre.length; i++) {
            ofus = ofus + nombre[i] + "1";
        }
        console.log("OFUSCACIÓN: " + ofus)
        alert("OFUSCACIÓN: " + ofus)
        return ofus;
    }

    function desofuscar(desofus) {
        desofus = "";
        for (var i = 0; i < nombre.length; i++) {
            if (nombre[i] == "1") {
                desofus = desofus + nombre[i - 1]
            }
        }
        console.log("DESOFUSCACIÓN: " + desofus)
        alert("DESOFUSCACIÓN: " + desofus)
        return desofus;
    }

    const [nombre, setNombre] = useState("");

    return (
        <View >
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'OFUSCADOR/DESOFUSCADOR', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />
            <div style={{ padding: 30 }}>
                <TextInput style={{ height: 40, width: 314 }} placeholder=" Ingresar palabra" onChange={(e) => { setNombre(e.nativeEvent.text) }}></TextInput>
                <br></br>
                <Button
                    onPress={() => ofuscar(nombre)}
                    title="Ofuscar"
                    color="#841584"
                />
                <br></br>
                <Button
                    onPress={() => desofuscar(nombre)}
                    title="Desofuscar"
                    color="#841584"
                />

            </div>
        </View>
    );
}



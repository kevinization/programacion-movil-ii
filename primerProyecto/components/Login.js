import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import * as firebase from 'firebase';

export default function Login() {

    const [nombre, setNombre] = useState("");
    const [password, setPassword] = useState("");

    function presionar() {
        firebase.auth().createUserWithEmailAndPassword(nombre, password).then((response) => {
            console.log(response)
        }).catch((err) => {
            console.log(err)

        });
    }
    return (
        <View>
            <TextInput
                placeholder="Ingresa tu nombre"
                style={styles.input}
                onChange={(e) => {
                    setNombre(e.nativeEvent.text)
                }}
            ></TextInput>
            <TextInput
                placeholder="Ingresa tu password"
                style={styles.input}
                onChange={(e) => {
                    setPassword(e.nativeEvent.text)
                }}
            ></TextInput>
            <Button title="PRESIONA" color="red" onPress={presionar}></Button>
        </View>
    );
}
const styles = StyleSheet.create({
    input: {
        width: "100%",
        height: 50,
        borderColor: "blue",
        borderWidth: 2,
    },
});



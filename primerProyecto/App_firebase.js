import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Navigation from './navigations/Navigation'
import Componente from './components/Componente'
import { firebaseApp } from './config/firebase';
import * as firebase from 'firebase'


export default function App() {

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            console.log("El usuario es: " + user);
        });
    }, []);
    return (
        <View style={styles.container}>
            <Componente />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
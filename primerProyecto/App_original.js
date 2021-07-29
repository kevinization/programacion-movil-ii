import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Componente from './components/Componente';
import Info from "./components/Info";
import Nuevo from './components/Nuevo'
import Ofuscar from './components/Ofuscar'
import Naomi from './components/Naomi'

export default function App() {

  let data = {
    nombre: "kevin",
    apellido: "rodarte",
    edad: "20",
    fun: function (n, e) {
      alert(`Hola ${n} tienes ${e} años`);
    }
  }

  return (
    // <View style={styles.container}>
    //   {/* <Componente /> */}
    //   {/* <Info nombre="kevin" apellido="rodarte" /> */}
    //   {/* <Info info={data} /> */}
    // </View>

    <SafeAreaProvider style={styles.container}>
      <Naomi />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

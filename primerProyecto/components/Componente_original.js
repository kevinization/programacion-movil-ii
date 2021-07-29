import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function Componente() {

  function saludar() {
    console.log("Saludando");
  }

  const [contador, setContador] = useState(1);
  const [nombre, setNombre] = useState("");

  return (
    <View>
      <Button
        onPress={saludar}
        title="Saludo por consola"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />

      <Text>----------------------------------------</Text>

      <Text>El número de clicks es {contador}</Text>
      <Button
        onPress={() => setContador(contador + 1)}
        title="Aumentar contador"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />

      <Text>----------------------------------------</Text>

      <TextInput placeholder="Ingresa tu nombre" onChange={(e) => { setNombre(e.nativeEvent.text) }}></TextInput>
      <Button
        onPress={() => alert("El nombre es: " + nombre)}
        title="Mostrar nombre"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Text>El contenido es {nombre}</Text>

      <Text>----------------------------------------</Text>



    </View>
  );
}



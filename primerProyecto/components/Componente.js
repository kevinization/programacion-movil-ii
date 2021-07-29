import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import * as firebase from 'firebase';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

export default function Componente() {
  const [nombre, setNombre] = useState("");
  console.log(nombre);
  function presionar() {
    console.log("Hola " + nombre);
  }
  const subirImagen = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    const pet = firebase.storage().ref().child("imagenes/imagen.jpg");
    pet.put(blob);
  }
  const seleccionarImagen = async () => {
    const resultPermissions = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    const resultPermissionsCamera = resultPermissions.permissions.cameraRoll.status;
    if (resultPermissionsCamera === "denied") {
      alert("No tienes los permisos necesarios");
    }
    else {
      const result = await ImagePicker.launchImageLibraryAsync(
        {
          allowsEditing: true,
          aspect: [4, 3],
        });
      console.log(result);
      subirImagen(result.uri);
    }

  };
  return (
    <View>
      <TextInput
        placeholder="Ingresa tu nombre"
        style={styles.input}
        onChange={(e) => {
          setNombre(e.nativeEvent.text)
        }}
      ></TextInput>
      <Button title="PRESIONA" color="red" onPress={seleccionarImagen}></Button>
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



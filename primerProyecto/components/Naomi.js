import React, { useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, SafeAreaView } from 'react-native';

export default function DataComponent(props){
  const [text, onChangeText] = React.useState("");
  const [result, setrestult] = useState("");
  let resultado = "";

  function Ofuscar(){
    resultado ="";
    for (let index = 0; index < text.length; index ++){
      resultado += text[index] + "1";
    }
    setrestult(resultado);
  }

  function desOfuscar(){
    resultado = "";
    for (let index = 0; index < text.length; index ++){
      if(text[index]!="1"){
        resultado += text[index];
      }
      setrestult(resultado);
    }
  }


  return (
    <View style={styles.container}>
      <Text>Escribe un nombre </Text>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={(val) => onChangeText(val)}
          placeholder="Ej. Luis"
        />
        <Text>Resultado = {result}</Text>
      </SafeAreaView>
      <Button
        onPress={() => Ofuscar()}
        title="Ofuscar"
        color="#678dcc"
      />
       <Button
        onPress={() => desOfuscar()}
        title="desOfuscar"
        color="#50ad7c"
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

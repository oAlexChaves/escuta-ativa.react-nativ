import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Artigo from "./src/components/artigo/index";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Escuta Ativa
      </Text>

      <TextInput
        style={styles.input}
        placeholder ="Email"
      />

      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder ="Senha"
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={ () =>{this.clicou()}}
      > 

        <Text style={styles.botaoTexto}>
          Entrar
        </Text>

      </TouchableOpacity>

      <Text style={styles.texto}>
      Ainda não possui uma conta?
      </Text>

      <Text style={styles.texto}
      onPress={() => Linking.openURL('')}>
      Clique Aqui
      </Text>




      <StatusBar style="auto" />
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

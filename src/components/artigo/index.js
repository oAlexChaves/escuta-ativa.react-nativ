import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Artigo() {
    return (
      <View style={styles.container}>
          <text style={styles.titulo} >Saúde mental no trabalho:  </text>
          <text>os impactos da pandemia e como retomar as atividades</text>
          <text>Artigo completo</text>
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      padding: 10,
      backgroundColor: '#93C57F',
      alignItems: 'center',
      justifyContent: 'center', 
      width: 300, 
      borderRadius: 15,
    },
    titulo: {
      fontWeight: 'bold',
    },
  });
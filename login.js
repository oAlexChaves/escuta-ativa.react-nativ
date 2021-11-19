import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Artigo from "./src/components/artigo/index";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Matheus pior do mundo</Text>
      <Artigo/>
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

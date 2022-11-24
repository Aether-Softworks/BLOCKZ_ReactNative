import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Counter } from './shared/components/counter';
import { TablePage } from './shared/components/tablePage';
import './App.css';

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%", 
  },
}) 

function App() {
  return (
    <View>
      <View>
        <Counter/>
      </View>
      <View style={styles.container}>
        <TablePage/>
      </View>
    </View>
  );
}

export default App;

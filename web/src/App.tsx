import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Counter } from './shared/components/counter';

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "yellow",
  },
})

function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Counter/>
      </View>
    </View>
  );
}

export default App;

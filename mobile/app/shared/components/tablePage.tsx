import React from 'react'
import { Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: "#000"
    },
    title: {
      marginTop: 16,
      paddingVertical: 8,
      borderWidth: 4,
      borderColor: "#20232a",
      borderRadius: 6,
      backgroundColor: "#61dafb",
      color: "#20232a",
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold"
    }
  });


export const TablePage = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>
            Hello World.
        </Text>
    </View>
  )
}

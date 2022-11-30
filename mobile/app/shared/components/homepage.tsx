import React from 'react';
import { Image, Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { Blockzlogo } from './blockzlogo';

// Variable to center various views
const centered: ViewStyle = {
    justifyContent: 'center',
    alignItems: 'center',
}

const SIZE = 100;
const FONT_SIZE = SIZE/2;

const styles = StyleSheet.create({
    container: {
        ...centered,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#0D1117'
    },
    containerBlockz: {
        ...centered,
        flex: 1,
        flexDirection: 'row', 
        backgroundColor: '#161D28',
    },
    counter: {
        ...centered,
        height: SIZE,
        width: SIZE,
        borderRadius: 5,
        backgroundColor: 'white',

    },
    numberText: {
        color: '#ee7767',
        fontWeight: 'bold',
        fontSize: FONT_SIZE,
    },
    buttonText:{
        color: 'white',
        fontSize: FONT_SIZE,
    },
    button: {
        ...centered,
        height: SIZE,
        width: SIZE,

    },
});

export const Homepage = () => {
  return (
    <View style={styles.container}>
        <View style={styles.containerBlockz}>
            <Blockzlogo/>
            <Text>TEST</Text>            
        </View>
        <View>

        </View>
        <View>

        </View>
    </View>
  )
}

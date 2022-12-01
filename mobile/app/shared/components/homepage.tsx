import React, {Component, useState} from 'react';
import { Switch, StyleSheet, Text, View, ViewStyle, Button, Alert } from 'react-native';
import { Blockzlogo } from './blockzlogo';
import TableRender from './tableRender';
import TaskRender from './taskRender';
import MyView from '../utils/MyView';


// Variable to center various views
const centered: ViewStyle = {
    justifyContent: 'center',
    alignItems: 'center',
}

const SIZE = 1000;
const FONT_SIZE_24 = 24;
const FONT_SIZE_18 = 18
const BLOCKZ_GREEN = '#34B487'

const styles = StyleSheet.create({
    container: {
        ...centered,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        backgroundColor: '#0D1117'
    },
    containerBlockz: {
        ...centered,
        flexDirection: 'column', 
        backgroundColor: '#161D28',
        width: 156,
        height: 148,
        borderRadius: 16,
    },
    titleText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: FONT_SIZE_24,
        padding: 8
    },
    letterText: {
        color: '#FFFFFF',
        fontWeight: "normal",
        fontSize: FONT_SIZE_18,
        paddingTop: 8, 

    },
    button: {
        width: "75%",
        borderRadius: 6,
        overflow: "hidden", 
    }
});

export const Homepage = () => {
    const [value, setValue] = useState(true)
  return (
    <View style={styles.container}>
        <View style={styles.containerBlockz}>
            <View style={{paddingTop: 8}}>
                <Blockzlogo width={88} height={88}/>
            </View>
            <Text style={styles.titleText}>BLOCKZ</Text>         
        </View>
        <View style={{padding: 32}}>
            <View style={{justifyContent:"center", alignItems:"center"}}>
                <Switch
        //   onValueChange={value => setValue(!value))}
        //   value={value}
        />
        {/* CHRISTIAN THIS IS WHERE YOU WERE WORKING */}
                <MyView>
                    <TableRender/>
                </MyView>
                <Text style={styles.letterText}>BUILD A TIMEBLOCK TABLE!</Text>
                <MyView>
                    <TaskRender/>
                </MyView>
                <Text style={styles.letterText}>OR A TASK LIST!</Text>
            </View>
        </View>
        <View style={styles.button}>
            <Button
                onPress={() => Alert.alert("This will take you to the login/signup screen")}
                title="Get Started"
                color={BLOCKZ_GREEN}
                accessibilityLabel="Learn more about this button."
            />  
        </View>
    </View>
  );
};


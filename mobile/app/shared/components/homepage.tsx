import React, {Component, useState, useRef, useEffect} from 'react';
import { Switch, StyleSheet, Text, View, ViewStyle, Button, Alert, Animated } from 'react-native';
import { Blockzlogo } from './blockzlogo';
import TableRender from './tableRender';
import TaskRender from './taskRender';


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
    containerSVG: {
        ...centered,
        flexDirection: "row",
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 32,
        paddingRight: 32,
        justifyContent:"center",
        alignItems: 'center',
    },
    titleText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: FONT_SIZE_24,
        padding: 8
    },
    letterText: {
        ...centered,
        color: '#FFFFFF',
        fontWeight: "normal",
        fontSize: FONT_SIZE_18,
        paddingTop: 8, 

    },
    button: {
        width: "75%",
        borderRadius: 6,
        overflow: "hidden", 
    },
});

export const Homepage = () => {
    const timeblockPos = useRef(new Animated.Value(175)).current
    const taskPos = useRef(new Animated.Value(-250)).current
    const opacityTimeBlock = useRef(new Animated.Value(1)).current
    const opacityTask = useRef(new Animated.Value(0)).current
    const [latch, setLatch] = useState(true)
    const [getStarted, setGetStarted] = useState(true)

  
  const TranslateIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(timeblockPos, {
        useNativeDriver: true,
        toValue: 175,
      duration: 500
    }).start();
    Animated.timing(opacityTimeBlock, {
        useNativeDriver: true,
        toValue: 1,
        duration: 250
    }).start();
    Animated.timing(taskPos, {
        useNativeDriver: true,
        toValue: -250,
        duration: 500,
    }).start()
    Animated.timing(opacityTask, {
        useNativeDriver: true,
        toValue: 0,
        duration: 100,
    }).start()
  };

  const TranslateOut = () => {
    Animated.timing(timeblockPos, {
        useNativeDriver: true,
        toValue: 275,
        duration: 500
    }).start();
    Animated.timing(opacityTimeBlock, {
        useNativeDriver: true,
        toValue: 0,
        duration: 100
    }).start();
    Animated.timing(taskPos, {
        useNativeDriver: true,
        toValue: -85,
        duration: 500,
    }).start()
    Animated.timing(opacityTask, {
        useNativeDriver: true,
        toValue: 1,
        duration: 250,
    }).start()
  };

    // do {
    //     for(let i = 0; i < 5000; i++) {
    //         if(i < 5000) {
    //             continue
    //         } else {
    //             setLatch(!latch)
    //         }
    //     }
    // } while(getStarted == true)

    return (
    <View style={styles.container}>
        <View style={styles.containerBlockz}>
            <View style={{paddingTop: 8}}>
                <Blockzlogo width={88} height={88}/>
            </View>
            <Text style={styles.titleText}>BLOCKZ</Text>         
        </View>
        <View style={{flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.containerSVG}>
                <Animated.View style={{transform: [{translateX: timeblockPos}], opacity: opacityTimeBlock}}>
                    <TableRender/>
                </Animated.View>
                <Animated.View style={{transform: [{translateX: taskPos}], opacity: opacityTask}}>
                    <TaskRender/>
                </Animated.View>
            </View>
            <Text style={styles.letterText}>The Budget Builder For Your Time!</Text>
        </View>
        <View style={styles.button}>
            <Button
                // onPress={() => Alert.alert("This will take you to the login/signup screen")}
                onPress={() => setGetStarted(false)}
                title="Get Started"
                color={BLOCKZ_GREEN}
                accessibilityLabel="Learn more about this button."
            />
        </View>
    </View>
  );
};


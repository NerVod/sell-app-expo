import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

function AppHeading({children}) {
    return (
       <Text style ={styles.text}>{children}</Text>
    );
}

const styles= StyleSheet.create({
    text: {
        fontSize: 32,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
        color: "blue",
    }
})

export default AppHeading;
import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { MateriaCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors';
import { Platform } from 'react-native-web';


function AppTextInput({ icon, ...otherProps }) {
    return (
        <View style={styles.container}>
            {icon && <MateriaCommunityIcons name={icon} size={20} color={colors.medium} style={styles.icon} />}
            <TextInput  style={styles.textInput} {...otherProps}/>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: '100%',
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10,
    },
    textInput: {
        color: colors.dark,
        fontSize: 18,
        fontFamily: Platform.OS ==="android"? "Roboto": "Avenir"
    }
})

export default AppTextInput;
import React from 'react';
import { StyleSheet, Image, View, TouchableHighlight } from "react-native"

import AppText from './AppText/AppText';
import { Swipeable, GestureHandlerRootView } from 'react-native-gesture-handler';
import colors from '../config/colors';

function ListItems({title, subTitle, image, imageComponent, onPress, renderRightActions}) {
    return (
        <GestureHandlerRootView >
            <Swipeable renderRightActions={renderRightActions}>
                <TouchableHighlight
                underlayColor={colors.light}
                onPress={onPress}>
                    <View style ={styles.container}>
                        {imageComponent}
                        {image && <Image style={styles.image} source={image} />}
                        <View style={styles.detailsContainer}>
                            <AppText style={styles.title}>{title}</AppText>
                            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
                        </View>
                    </View>
                </TouchableHighlight>
            </Swipeable>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15,
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent:"center",
    },
    image:{
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    title: {
        fontWeight: "500",
    },
    subTitle: {
        color: colors.medium,
    }
})

export default ListItems;
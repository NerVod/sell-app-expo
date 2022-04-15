import React from 'react';
import { StyleSheet, Image, View, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons} from '@expo/vector-icons';
import { Swipeable, GestureHandlerRootView } from 'react-native-gesture-handler';

import AppText from '../components/AppText';
import colors from '../config/colors';
import ShowHide from './ShowHide';

function ListItems({title, subTitle, image, IconComponent, onPress, renderRightActions, showChevrons}) {

  


    return (
        <GestureHandlerRootView >
            <Swipeable renderRightActions={renderRightActions}>
                <TouchableHighlight
                underlayColor={colors.light}
                onPress={onPress}>
                    <View style ={styles.container}>
                        {IconComponent}
                        {image && <Image style={styles.image} source={image} />}
                        <View style={styles.detailsContainer}>
                            <AppText style={styles.title}>{title}</AppText>
                            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
                        </View>
                      
                        <ShowHide showChevrons={showChevrons}>
                            <MaterialCommunityIcons  color={colors.medium} name='chevron-right' size={25}></MaterialCommunityIcons>
                        </ShowHide>
                        
                    </View>
                </TouchableHighlight>
            </Swipeable>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: "row",
        padding: 15,
        backgroundColor: colors.white
    },
    detailsContainer: {
        flex:1,
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
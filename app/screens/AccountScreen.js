import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import ListItems from '../components/ListItem';
import Screen from '../components/Screen';
import colors from '../config/colors';
import Icon from '../components/Icon';
import ListItemSeparator from '../components/ListItemSeparator';

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        }
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        }
    },
]

function AccountScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItems 
                title= "Benjamin Jeannerot"
                subTitle="benjamin.jeannerot@gmail.com"
                image={require("../assets/benj.jpg")}
                />
            </View>
            <View style={styles.container}>
                <FlatList 
                data={menuItems}
                keyExtractor={menuItem => menuItem.title}
                ItemSeparatorComponent={ListItemSeparator}
                renderItem={({ item }) =>
                    <ListItems 
                        title={item.title}
                        IconComponent={
                            <Icon 
                            name={item.icon.name}
                            backgroundColor={item.icon.backgroundColor}
                            />
                            } 
                    />
                }
                />
            </View>
            <ListItems 
                title={"Log Out"}
                IconComponent={
                    <Icon name="logout" backgroundColor='#ffe66d'/>
                }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light
    },
   container: {
       marginVertical: 20,
   } 
})

export default AccountScreen;
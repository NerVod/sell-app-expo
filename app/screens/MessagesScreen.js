import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native'

import ListItems from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';

const messages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/benj.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/benj.jpg')
    },

]

function MessagesScreen(props) {
    return (
        <Screen >
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) => (
                 <ListItems
                    title={item.title}
                    subTitle={item.description}
                    image={item.image}
                    onPress={() => console.log("Message selected", item)}
                    renderRightActions={ListItemDeleteAction}
                    // renderRightActions={() => (
                    //     <View style={{
                    //         backgroundColor:"red",
                    //         width:120
                    //     }}
                    //     ></View>
                    // )}
                 />
                  )}
                  ItemSeparatorComponent={ListItemSeparator}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    
})

export default MessagesScreen;
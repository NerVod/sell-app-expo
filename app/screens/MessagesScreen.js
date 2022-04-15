import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native'

import ListItems from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';

const initialMessages = [
    {
        id: 1,
        title: 'Benjamin Jeannerot',
        description: 'Bonjour, est-ce que cet article est toujours disponible à la vente ? ',
        image: require('../assets/benj.jpg')
    },
    {
        id: 2,
        title: 'Benjamin Jeannerot',
        description: 'Je suis intéressé par cet article, quand pouvez-vous me le faire parvenir ?',
        image: require('../assets/benj.jpg')
    },

]

function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false)
    

    const handleDelete = message => {
        // Delete the message from messages
       setMessages(messages.filter((m)=> m.id !== message.id ))
       

    }

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
                    renderRightActions={() => (
                         <ListItemDeleteAction onPress={() => handleDelete(item)}/>)}
                    showChevrons={true}

                 />
                  )}
                  ItemSeparatorComponent={ListItemSeparator}
                  refreshing={refreshing}
                  onRefresh={() => {
                      setMessages([
                        {
                            id: 2,
                            title: 'T2',
                            description: 'D2',
                            image: require('../assets/benj.jpg')
                        },
                      ])
                  }}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    
})

export default MessagesScreen;
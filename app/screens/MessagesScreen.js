import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native'

import ListItems from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';

const initialMessages = [
    {
        id: 1,
        title: 'T1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Et officia recusandae fuga distinctio expedita dolorem repellendus natus placeat, accusantium quam quaerat? Maxime explicabo repellat aliquid numquam incidunt architecto, in illo consequuntur laudantium quisquam fugit, vitae a amet officiis hic odio mollitia sint quaerat corrupti quae maiores, quidem eos quibusdam! Obcaecati, possimus aliquam?',
        description: 'D1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Et officia recusandae fuga distinctio expedita dolorem repellendus natus placeat, accusantium quam quaerat? Maxime explicabo repellat aliquid numquam incidunt architecto, in illo consequuntur laudantium quisquam fugit, vitae a amet officiis hic odio mollitia sint quaerat corrupti quae maiores, quidem eos quibusdam! Obcaecati, possimus aliquam? Placeat nostrum soluta ab accusamus asperiores, consectetur fugit ex quas nemo provident numquam, accusantium sint error praesentium inventore minus quibusdam quod eaque doloribus unde qui. Necessitatibus tenetur aliquid aperiam asperiores, labore expedita repellendus adipisci architecto omnis totam dicta eaque beatae ipsam numquam officia officiis neque ipsa rem laudantium.',
        image: require('../assets/benj.jpg')
    },
    {
        id: 2,
        title: 'T2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Et officia recusandae fuga distinctio expedita dolorem repellendus natus placeat, accusantium quam quaerat? Maxime explicabo repellat aliquid numquam incidunt architecto, in illo consequuntur laudantium quisquam fugit, vitae a amet officiis hic odio mollitia sint quaerat corrupti quae maiores, quidem eos quibusdam! Obcaecati, possimus aliquam?',
        description: 'D2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Et officia recusandae fuga distinctio expedita dolorem repellendus natus placeat, accusantium quam quaerat? Maxime explicabo repellat aliquid numquam incidunt architecto, in illo consequuntur laudantium quisquam fugit, vitae a amet officiis hic odio mollitia sint quaerat corrupti quae maiores, quidem eos quibusdam! Obcaecati, possimus aliquam? Placeat nostrum soluta ab accusamus asperiores, consectetur fugit ex quas nemo provident numquam, accusantium sint error praesentium inventore minus quibusdam quod eaque doloribus unde qui. Necessitatibus tenetur aliquid aperiam asperiores, labore expedita repellendus adipisci architecto omnis totam dicta eaque beatae ipsam numquam officia officiis neque ipsa rem laudantium.',
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
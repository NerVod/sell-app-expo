import React from 'react';
import { FlatList } from 'react-native';

import Screen from '../components/Screen';

const listings = [
    {
        id: 1,
        title: 'Red jacket for sale',
        price: 100,
        image: require('../assets/jacket.jpg')
    }
]

function ListingsScreen(props) {
    return (
        <Screen>
            <FlatList 
            data={listings}/>
        </Screen>
    );
}

export default ListingsScreen;
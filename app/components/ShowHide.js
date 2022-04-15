import React from 'react';
import { View } from 'react-native-web';

function ShowHide ({showChevrons, children}) {

    if (!showChevrons){
        return null
    }

    return (
        <View>
            {children}
        </View>
    );
}

export default ShowHide;
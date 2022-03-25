import React from 'react';
import { Stylesheet } from 'react-native';

import AppText from './AppText';


function ErrorMessage({ error }) {
    if (!error) return null;

    return (
        <AppText style={styles.error}>{error}</AppText>
    );
}

const styles = {
    error: {
        color: 'red'
    }
}

export default ErrorMessage;
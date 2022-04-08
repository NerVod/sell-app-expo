import React from 'react';
import { Stylesheet } from 'react-native';

import AppText from '../AppText';


function ErrorMessage({ error, visible }) {
    if (!visible || !error) return null;

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
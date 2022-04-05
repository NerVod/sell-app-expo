import React from 'react';
import { useFormikContext } from 'formik';

import AppButton from './AppButton';

function submitButton({ title }) {
    const { handleSubmit } = useFormikContext();
    return (
        <AppButton title="login" onPress={handleSubmit} color="primary"/> 
    );
}

export default submitButton;
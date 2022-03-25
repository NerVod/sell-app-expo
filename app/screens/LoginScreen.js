import React, {useState} from 'react';
import { Image, StyleSheet} from 'react-native';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';

import Screen from '../components/Screen';

function LoginScreen(props) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require("../assets/logo-red.png")}/>
            <AppTextInput 
            autoCapitalize="none"
            autoCorrect={false}
            keybordType="email-address"
            onChangeText={text => setEmail(text)}
            icon="email"
            placeholder="Email"
            textContentType="emailAddress"
            />
            <AppTextInput 
            autoCapitalize="none"
            autoCorrect={false}
            icon='lock'
            onChangeText={text => setPassword(text)}
            placeholder="Password"
            secureTextEntry={true}
            textContentType="password"
            />
            <AppButton title="login" onPress={() => console.log(email, password) } color="primary"/>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding:10,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,
    },
})

export default LoginScreen;
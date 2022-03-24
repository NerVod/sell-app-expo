import React, { useState } from "react";
import {View, Image, Text, TextInput} from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import 'react-native-gesture-handler'

import AppText from './app/components/AppText/AppText';
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItems from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";


export default function App() {

    const [firstName, setFirstName ] = useState('');

return (
    <Screen>
        <AppTextInput placeholder="Username" />
    </Screen>
    );
}
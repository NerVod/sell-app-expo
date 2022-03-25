import React, { useState } from "react";
import {View, Image, Text, TextInput} from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import 'react-native-gesture-handler'

import AccountScreen from "./app/screens/AccountScreen";
import AppButton from "./app/components/AppButton";
import AppText from './app/components/AppText';
import AppTextInput from "./app/components/AppTextInput";
import Card from "./app/components/Card";
import Icon from "./app/components/Icon";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import ListItems from "./app/components/ListItem";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import { Switch } from "react-native";
import AppPicker from "./app/components/AppPicker";



export default function App() {

    const [isNew, setIsNew ] = useState('');

return (
    <Screen>
        <AppPicker icon="apps" placeholder="Category"/>
        <AppTextInput icon="email" placeholder="email"/>

    </Screen>
    );
}
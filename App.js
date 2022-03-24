import React from "react";
import {View, Image, Text} from "react-native";
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

export default function App() {
return (
    <Screen>
        <Icon name="email" size={100}/>
    </Screen>
    );
}
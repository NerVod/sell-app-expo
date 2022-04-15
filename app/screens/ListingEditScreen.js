import React from 'react';
import { StyleSheet } from 'react-native';

import * as Yup from 'yup';
import AppPicker from '../components/AppPicker';
import CategoryPickerItem from '../components/CategoryPickerItem';


import { AppForm, AppFormField, AppFormPicker, SubmitButton } from '../components/Forms';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.string().required().nullable().label("Category"),
});

const categories = [
    { label: "Furniture", value: 1, backgroundColor:'#fc5c65', icon:'floor-lamp' },
    { label: "Clothing", value: 2, backgroundColor:'#fd9644', icon:'shoe-heel' },
    { label: "Cameras", value: 3, backgroundColor:'#fed330', icon:'camera' },
    { label: "Games", value: 4, backgroundColor:'#26de81', icon:'cards' },
    { label: "Sport", value: 5, backgroundColor:'#2bcbba', icon:'basketball' },
    { label: "Movies & Music", value: 6, backgroundColor:'#45aaf2', icon:'headphones' },
    { label: "Books", value: 7, backgroundColor:'#4b7bec', icon:'book-open-variant' },
    { label: "Cars", value: 8, backgroundColor:'#a55eea', icon:'car' },
    { label: "Other", value: 9, backgroundColor:'#778ca3', icon:'application' },
];

function ListingEditScreen() {
    return (
        <Screen>
            <AppForm
            initialValues={{
                title:"",
                price:"",
                description:"",
                category: null,
            }}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}
            >
                <AppFormField maxLength={255} name={"title"} placeholder={"Title"} />
                <AppFormField 
                    keyboardType="numeric"
                    maxLength={8}
                    name={"price"}
                    placeholder={"Price"}
                    width={120}
                />
                <AppPicker 
                    items={categories} 
                    numberOfColumns={3}
                    name="category"
                    PickerItemComponent={CategoryPickerItem} 
                    placeholder="Category" 
                    width="50%" />
                <AppFormField 
                    maxLength={255}
                    multiline
                    name="description"
                    numberOfLines={3}
                    placeholder="Description"
                />

                <SubmitButton title="Post" color="primary"/>

            </AppForm>

        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    }
});

export default ListingEditScreen;
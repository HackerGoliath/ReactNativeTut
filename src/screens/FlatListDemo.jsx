import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-web'

const FlatListDemo = () => {
    const names = [
        {
            name: "Deepak"
        },
        {
            name: "Pradeep"
        },
        {
            name: "Vikram"
        },
        {
            name: "Rahul"
        },
        {
            name: "Jabba"
        },
    ]
    return (
        <FlatList data={names} renderItem={(element) => {
            console.log(element.item.name);
            return (
                <Text style={styles.textStyles}>{element.item.name}</Text>
            )
        }} />
    )
}

const styles = StyleSheet.create({
    textStyles: {
        fontSize: 40,
    }
})

export default FlatListDemo
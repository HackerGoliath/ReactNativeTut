import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-web'

const FlatListDemo = () => {
    const names = [
        {
            index: "1",
            name: "Deepak"
        },
        {
            index: "2",
            name: "Pradeep"
        },
        {
            index: "3",
            name: "Vikram"
        },
        {
            index: "4",
            name: "Rahul"
        },
        {
            index: "5",
            name: "Jabba"
        },
        {
            index: "6",
            name: "Deepak"
        },
    ]
    return (
        <FlatList style={styles.listStyle} keyExtractor={(key) => {
            return key.index
        }}
            horizontal
            inverted
            // numColumns={2}
            showHorizontalScrollIndicator={false}
            data={names} renderItem={(element) => {
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
        padding: 30,
        backgroundColor: 'blue',
        margin: 20,
        color: "white",
    },
    listStyle: {
        textAlign: "center",
        margin: 20,
        padding: 10
    }
})

export default FlatListDemo
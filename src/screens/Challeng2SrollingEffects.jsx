/*
Create a netflix top 10 shows card both horizontally and vertically
*/

import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'

const netflixSeries = [
    {
        name: "Archive 81",
        year: "2022",
        Creator: "Rebecca Sonnenshine",
        Genre: "Horror, thriller",
    },
    {
        name: "Cheer",
        year: "2021 - 2022",
        Creator: "Greg Whiteley",
        Genre: "Docuseries",
    },
    {
        name: "Cobra Kai",
        year: "2018 - 2022",
        Creator: "Hayden Scholssberg",
        Genre: "Drama",
    },
    {
        name: "The Witcher",
        year: "2020 - 2021",
        Creator: "Lauren Schmit Hissrich",
        Genre: "Reality",
    },
    {
        name: "Emily in Paris",
        year: "2020",
        Creator: "Darren Star",
        Genre: "Romance, Drama",
    },
    {
        name: "Death Note",
        year: "2022",
        Creator: "Rebecca Sonnenshine",
        Genre: "Horror, thriller",
    },
]

const Challeng2SrollingEffects = () => {
    return (
        <View>
            <Text style={styles.mainHeading}>List of Top 10 Series in Netflix</Text>
            <FlatList
                keyExtractor={(key) => key.name}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.listStyle}
                data={netflixSeries}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.viewStyle}>
                            <Text style={styles.textStyle} >Name: {item.name}</Text>
                            <Text style={styles.textStyle} >Creator: {item.Creator}</Text>
                            <Text style={styles.textStyle} >Year: {item.year}</Text>
                            <Text style={styles.textStyle} >Genre: {item.Genre}</Text>
                        </View>
                    )
                }}
            />
        </View>
    )
}

export default Challeng2SrollingEffects

const styles = StyleSheet.create({
    listStyle: {
        textAlign: "center",
        margin: 20,
        padding: 5,
    },
    viewStyle: {
        padding: 5,
        margin: 20,
    },
    mainHeading: {
        margin: 30,
        fontSize: 25,
    },
    textStyle: {
        backgroundColor: "#009688",
        fontSize: 23,
        color: "white",
        padding: 5,
    },
})
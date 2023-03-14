import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'

const ColorGenerator = () => {
    const [newColor, setNewColor] = useState([])
    const randomColor = () => {
        const c1 = Math.floor(Math.random() * 256)
        const c2 = Math.floor(Math.random() * 256)
        const c3 = Math.floor(Math.random() * 256)
        return `rgb(${c1}, ${c2}, ${c3})`
    }
    // console.log(newColor);
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity
                style={styles.btnStyle}
                onPress={() => setNewColor([...newColor, randomColor()])}>
                <Text style={styles.txtStyle}>Generate Random Color</Text>
            </TouchableOpacity>

            <FlatList
                data={newColor}
                renderItem={({ item }) => {
                    // console.log(item);
                    return (
                        <View style={styles.imgContainer}>
                            <View style={{
                                backgroundColor: item,
                                width: 100,
                                height: 100,
                                borderRadius: 5,
                                marginTop: 5,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "80%"
                            }}>
                                <Text style={styles.txtStyle}>{item}</Text>
                            </View>
                        </View>
                    )
                }}
            />

        </View>
    )
}

export default ColorGenerator

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: 100,
    },
    btnStyle: {
        backgroundColor: "#00b0ff",
        position: "relative",
        overflow: "hidden",
        color: "#eee",
        paddingVertical: 10,
        paddingHorizontal: 15,
        margin: 0,
        display: "flex",
        justifyContent: "center",
        alignltems: "center",
        borderRadius: 5,
    },
    txtStyle: {
        color: "white",
        fontSize: 20,
    },
    imgContainer: {
        marginVertical: 10,
        paddingHorizontal: 30,
        display: " flex",
        alignltems: "center",
        justifyContent: "center",
        width: "100%",
        fontWeight: "bold",
    },
})
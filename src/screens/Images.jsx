import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Images = () => {
    return (
        <View style={styles.listStyle}>
            <Text style={styles.textStyle}>Images</Text>
            <Image style={styles.imageStyle} source={require('../../assets/text1.jpeg')} />
            <Image style={styles.imageStyle} source={require('../../assets/text1.jpeg')} />
            <Image style={styles.imageStyle} source={require('../../assets/text1.jpeg')} />
        </View>
    )
}

export default Images

const styles = StyleSheet.create({
    listStyle: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    textStyle: {
        fontSize: 30,
        margin: 20,
    },
    imageStyle: {
        width: 300,
        height: 300,
        margin: 10,
    }
})
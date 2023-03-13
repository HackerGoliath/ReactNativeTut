import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const CardDetail = ({ textData, imgSrc }) => {
    return (
        <View style={styles.listStyle}>
            <Text style={styles.textStyle}>{textData}</Text>
            <Image style={styles.imageStyle} source={imgSrc} />
        </View>
    )
}



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

export default CardDetail
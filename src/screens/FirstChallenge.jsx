import React from 'react'
import { View } from 'react-native-web'
import { StyleSheet, Text } from 'react-native'

const FirstChallenge = () => {
    const myName = "Deepak"
    return (
        <View>
            <Text style={styles.textStyle1}>Welcome to Deepak Technical</Text>
            <Text style={styles.textStyle2}>We love React Native</Text>
            <Text>Hi my name is : {myName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle1: {
        fontWeight: "bold",
        fontSize: 40,
        color: "blue"
    },
    textStyle2: {
        fontSize: 30
    },
})
export default FirstChallenge
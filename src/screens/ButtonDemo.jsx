import { Alert, Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

const ButtonDemo = () => {
    return (
        <View>
            <Text style={styles.textStyle}>ButtonDemo</Text>
            <Button
                disabled
                title='Join Our Discord Server'
                onPress={() => {
                    // console.log("Button Clicked");
                    Alert.alert("Simple Button Pressed")
                }}
            />

            <TouchableOpacity onPress={() => console.log("Touchable Opacity clicked")}>
                <Image style={styles.imageStyle} source={require("../../assets/text1.jpeg")} />
                <Text>Complex Button</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ButtonDemo

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        marginVertical: 200,
    },
    imageStyle: {
        width: 300,
        height: 300,
    },
})
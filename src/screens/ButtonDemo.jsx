import { Alert, Button, StyleSheet, Text, View } from 'react-native'
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
        </View>
    )
}

export default ButtonDemo

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        marginVertical: 200,
    },
})
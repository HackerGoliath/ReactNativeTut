import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const CounterNumber = () => {
    const [count, setCount] = useState(0);
    return (
        <View>
            <Text style={styles.counter}> {count} </Text>
            <View style={styles.button_group}>
                <TouchableOpacity
                    style={[styles.commonButton, styles.subtract]}
                    onPress={() => {
                        setCount(count + 10)
                        // console.log(count);
                    }}>
                    <Text style={styles.commonText}> + 10 </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.commonButton, styles.reset]}
                    onPress={() => { setCount(0) }}>
                    <Text style={styles.commonText}> Reset </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.commonButton, styles.add]}
                    onPress={() => { if (count > 0) setCount(count - 10) }}>
                    <Text style={styles.commonText}> - 10 </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CounterNumber

const styles = StyleSheet.create({
    button_group: {
        // width: "100%",
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
    },
    counter: {
        fontSize: 80,
        textAlign: "center",
        // width: "100%",
        padding: 20,
        marginTop: 60,
        marginBottom: 30,
    },
    commonButton: {
        backgroundColor: "black",
        width: 200,
        margin: 10,
        padding: 20,
    },
    commonText: {
        color: "white",
        fontSize: 20,
        alignSelf: "center",
    },
})
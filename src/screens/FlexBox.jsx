import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlexBox = () => {
    return (
        <View>
            <View style={styles.parentView} >
                <Text style={[styles.childText1, styles.commonStyle]}>Box 1</Text>
                <Text style={[styles.childText2, styles.commonStyle]}>Box 2</Text>
                <Text style={[styles.childText3, styles.commonStyle]}>Box 3</Text>
                <Text style={[styles.childText4, styles.commonStyle]}>Box 4</Text>
                <Text style={[styles.childText5, styles.commonStyle]}>Box 5</Text>
            </View>
        </View>
    )
}

export default FlexBox

const styles = StyleSheet.create({
    parentView: {
        // flex, justifyContent,alignItems always work in parent element
        width: 400,
        height: 700,
        marginTop: 100,
        marginHorizontal: 10,
        borderWidth: 3,
        borderColor: "#101820ff",
        backgroundColor: "aliceblue",
        // by Default:
        // flexDirection: "column",
        flexDirection: "row",
        // flexDirection: "column-reverse",

        // justifyContent: "center",
        // justifyContent: "flex-start",
        // justifyContent: "flex-end",
        // justifyContent: "space-between",
        // justifyContent: "space-around",
        justifyContent: "space-evenly",

        // alignItems: "stretch", // By Default
        alignItems: "center",
        // alignItems: "flex-start",
        // alignItems: "flex-end",
    },
    childText1: {
        flex: 1, // takes all available free space
        backgroundColor: "#97bc62ff",
        borderColor: "#2c5f2d",
        color: "#2c5f2d",
    },
    childText2: {
        flex: 2, // takes double space than flex:1
        backgroundColor: "#d4b996ff",
        borderColor: "#a07855ff",
        color: "#a07855ff",
    },
    childText3: {
        backgroundColor: "#9cc3d5ff",
        borderColor: "#0063b2ff",
        color: "#0063b2ff",
        // alignItems: "center", // Not Working for child
        // alignSelf: "flex-start",
        // alignSelf: "flex-end",
        alignSelf: "stretch",
    },
    childText4: {
        backgroundColor: "#7e9713",
        borderColor: "#0063b2ff",
        color: "#0063b2ff",
    },
    childText5: {
        backgroundColor: "#5ea2a1",
        borderColor: "#0063b2ff",
        color: "#0063b2ff",
    },
    commonStyle: {
        // width: "35%",
        // height: 100,
        fontSize: 20,
        borderWidth: 5,
        // padding: 30,
    }
})
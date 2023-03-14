import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Positions = () => {
    return (
        <View>
            <View style={styles.parentView} >
                <Text style={[styles.childText1, styles.commonStyle]}>Box 1</Text>
                <Text style={[styles.childText2, styles.commonStyle]}>Box 2</Text>
                <Text style={[styles.childText3, styles.commonStyle]}>Box 3</Text>
                <Text style={[styles.childText4, styles.commonStyle]}>Box 4</Text>
                <View style={styles.subParent}>
                    <Text style={[styles.childText5, styles.commonStyle]}>Box 5</Text>
                </View>
            </View>
        </View>
    )
}

export default Positions

const styles = StyleSheet.create({
    parentView: {
        // After give position to parent you can use top,left, bottom, right
        width: 400,
        height: 700,
        marginTop: 100,
        marginHorizontal: 10,
        borderWidth: 3,
        borderColor: "#101820ff",
        backgroundColor: "aliceblue",
        position: "relative",
    },
    childText1: {
        backgroundColor: "#97bc62ff",
        borderColor: "#2c5f2d",
        color: "#2c5f2d",
    },
    childText2: {
        backgroundColor: "#d4b996ff",
        borderColor: "#a07855ff",
        color: "#a07855ff",
        right: 0,
    },
    childText3: {
        backgroundColor: "#9cc3d5ff",
        borderColor: "#0063b2ff",
        color: "#0063b2ff",
        bottom: 0,
        right: 0,
    },
    childText4: {
        backgroundColor: "#7e9713",
        borderColor: "#0063b2ff",
        color: "#0063b2ff",
        bottom: 0,
    },
    childText5: {
        backgroundColor: "#5ea2a1",
        borderColor: "#0063b2ff",
        color: "#0063b2ff",
        // top: "45%",
        // left: "45%",
        // alignSelf: "center",
    },
    commonStyle: {
        // By default absolute position is top:0 left:0
        width: 80,
        height: 60,
        fontSize: 20,
        borderWidth: 5,
        position: "absolute",
    },
    subParent: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
})
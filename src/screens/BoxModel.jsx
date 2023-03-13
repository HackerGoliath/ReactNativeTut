import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BoxModel = () => {
    return (
        <View>
            <View style={styles.parentView} >
                <Text style={[styles.childText1, styles.commonStyle]}>Box Model RN</Text>
                <Text style={[styles.childText2, styles.commonStyle]}>Box Model RN</Text>
                <Text style={[styles.childText3, styles.commonStyle]}>Box Model RN</Text>
            </View>
        </View>
    )
}

export default BoxModel

const styles = StyleSheet.create({
    parentView: {
        width: "95%",
        marginTop: 100,
        marginHorizontal: 10,
        borderWidth: 3,
        borderColor: "#101820ff"
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
    },
    childText3: {
        backgroundColor: "#9cc3d5ff",
        borderColor: "#0063b2ff",
        color: "#0063b2ff",
    },
    commonStyle: {
        fontSize: 20,
        // padding: 30,
        // paddingLeft: 50,
        // paddingTop: 50,
        // paddingBottom: 50,
        paddingVertical: 30,
        textAlign: "center",
        borderWidth: 5,
        // borderColor: "red",
        marginBottom: 30,
        // marginTop: 30,
        // marginLeft: 50,
        // marginRight: 50,
        marginHorizontal: 50,
    }

})
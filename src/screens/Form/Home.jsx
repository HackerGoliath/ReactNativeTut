import { StyleSheet, Text, View } from 'react-native'
import { Button } from '@mui/material'
import React from 'react'

const Home = ({ route, navigation }) => {
    const { myName } = route.params;
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.mainHeader}>Welcome {myName} 😎</Text>
            <Button variant="contained" sx={{ my: 5, backgroundColor: "#4630eb" }} onClick={() => navigation.goBack()}>Go Back</Button>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    mainHeader: {
        fontSize: 35,
        color: "#4c5dab",
        marginTop: 0,
        textTransform: "capitalize",
    }
})
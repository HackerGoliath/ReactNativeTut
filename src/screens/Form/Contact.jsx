import { StyleSheet, Text, View, Alert } from 'react-native'
import React, { useState } from 'react'
import { Typography, TextField, Button, Divider, Checkbox } from "@mui/material"
import { useFonts, JosefinSans_400Regular } from "@expo-google-fonts/josefin-sans"
import { Montserrat_700Bold } from "@expo-google-fonts/montserrat"
import AppLoading from 'expo-app-loading'

const Contact = () => {
    const [agree, setAgree] = useState(false)
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    // console.log(userName, password);
    const submitForm = () => {
        // return Alert.alert(userName, password)
        if (userName === "Deepak" && password === "123") {
            console.log(`Thank You ${userName} your password is ${password}`);
        }
        else {
            console.log("Invalid Credentials");
        }
    }

    let [fontLoaded, error] = useFonts({
        btnFont: require("../../../assets/fonts/ClimateCrisis-Regular.ttf"),
        regular: JosefinSans_400Regular,
        bold: Montserrat_700Bold
    });
    if (!fontLoaded) {
        return <AppLoading />
    }
    return (
        <View style={styles.mainContainer}>
            <Typography variant='h3' sx={{ my: 3 }}>Login Form</Typography>
            <Divider />
            <TextField label="Name" sx={{ my: 3 }} value={userName} onChange={(e) => setUserName(e.target.value)} />
            <TextField type="password" label="Password" sx={{ my: 3 }} value={password} onChange={(e) => setPassword(e.target.value)} />
            <View style={styles.wrapper}>
                <Checkbox value={agree} onChange={() => setAgree(!agree)} />
                <Text style={styles.checkText}>I have read and agreed with the TC</Text>
            </View>
            <Button variant="contained" disabled={!agree} sx={{ fontFamily: "btnFont", letterSpacing: "7px", backgroundColor: "#4630eb" }} onClick={() => submitForm()}>Login</Button>
        </View >
    )
}

export default Contact

const styles = StyleSheet.create({
    mainContainer: {
        fontFamily: "bold",
    },
    wrapper: {
        flexDirection: "row",
        fontFamily: "regular",
    },
    checkText: {
        marginVertical: 9,
        marginHorizontal: 0,
    }
})
import { StyleSheet, Text, View, TextInput, CheckBox, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'

const Contact = ({ navigation }) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")
    const [agree, setAgree] = useState(false)

    const submit = () => {
        if (!name && !email && !phone && !message) {
            console.log("Plzz fill all the fields");
            Alert.alert("Plzz fill all the fields")
        }
        else {
            console.log(`Thank You ${name}`);
            Alert.alert(`Thank You ${name}`)
            navigation.navigate("Home");
        }
    }

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.mainHeader}>Level Up your knowledge</Text>
            <Text style={styles.description}>You can reach us anytime via deepak@bhai.com</Text>

            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Enter Your Name</Text>
                <TextInput
                    style={styles.inputStyle} placeholder={"Deepak Bhai"}
                    placeholderTextColor="grey"
                    value={name}
                    onChangeText={(val) => setName(val)}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Enter Your Email</Text>
                <TextInput
                    style={styles.inputStyle} placeholder={"demo@deepak.com"}
                    placeholderTextColor="grey"
                    value={email}
                    onChangeText={(val) => setEmail(val)}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Enter Your Mobile Number</Text>
                <TextInput
                    style={styles.inputStyle} placeholder={"123456789"}
                    placeholderTextColor="grey"
                    value={phone}
                    onChangeText={(val) => setPhone(val)}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.labels}>How can we help you?</Text>
                <TextInput
                    style={[styles.inputStyle, styles.multilineStyle]} placeholder={"Tell us about yourself"}
                    value={message}
                    onChangeText={(val) => setMessage(val)}
                    placeholderTextColor="grey"
                    multiline={true}
                    numberOfLines={5}
                />
            </View>

            {/* Checkbox */}
            <View style={styles.wrapper}>
                <CheckBox
                    value={agree}
                    onValueChange={() => setAgree(!agree)}
                    color={agree ? "#4630eb" : undefined}
                />
                <Text style={styles.wrapperText}>I have read and agreed with all the T&C</Text>
            </View>

            {/* Submit Button */}
            <TouchableOpacity
                style={[styles.buttonStyle,
                {
                    backgroundColor: agree ? "#4630eb" : "grey"
                },
                ]}
                disabled={!agree}
                onPress={submit}
            >
                <Text style={styles.buttonText}>Contact Us</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Contact

const styles = StyleSheet.create({
    mainContainer: {
        height: "100%",
        paddingHorizontal: 30,
        backgroundColor: "#fff",
    },
    mainHeader: {
        fontSize: 20,
        color: "#344055",
        textTransform: "capitalize",
        fontWeight: 500,
        paddingTop: 20,
        paddingBottom: 15,
        fontFamily: "Main",
    },
    description: {
        textAlign: "left",
        fontWeight: 400,
        fontFamily: "Main",
        fontSize: 20,
        paddingBottom: 20,
        lineHeight: 25,
        color: "#7d7d7d",
    },
    inputStyle: {
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.3)",
        paddingHorizontal: 15,
        paddingVertical: 6,
        borderRadius: 2,
    },
    labels: {
        fontWeight: "bold",
        color: "#7d7d7d",
        paddingBottom: 5,
        fontFamily: "Main",
        lineHeight: 25,
        fontSize: 15,
    },
    inputContainer: {
        marginTop: 20,
    },
    multilineStyle: {
        paddingVertical: 4,
    },
    buttonStyle: {
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 18,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 30,
    },
    buttonText: {
        color: "#eee",
        fontFamily: "Regular",
    },
    wrapper: {
        flexDirection: "row",
        marginTop: 20,
        fontFamily: "Main",
        fontWeight: 300,
    },
    wrapperText: {
        marginLeft: 10,
        color: "#7d7d7d",
        fontFamily: "Main",
    }

})
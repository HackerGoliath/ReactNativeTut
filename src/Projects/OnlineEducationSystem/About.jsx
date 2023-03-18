import { StyleSheet, Text, View, Image, Linking, TouchableOpacity } from 'react-native'
import React from 'react'

const About = () => {
    return (
        <View style={styles.aboutContainer}>
            <Text style={styles.mainHeader}> Deepak Bhai </Text>
            <Text style={styles.paraStyle}> I am a full statck web developer 😄 </Text>

            <View>
                <Image
                    style={styles.imgStyle}
                    source={{ uri: "https://images.pexels.com/photos/15496332/pexels-photo-15496332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }}
                />
            </View>

            <View style={styles.aboutLayout}>
                <Text style={styles.aboutSubHeader}>About me</Text>
                <Text style={[styles.paraStyle, styles.aboutPara]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam et nam est. Temporibus quo, corrupti et earum optio voluptatem laborum!</Text>
            </View>

            <Text style={styles.mainHeader}> Follow me on Social Networks</Text>

            <View style={styles.menuContainer}>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => Linking.openURL("https://youtube.com")}>
                    <Image
                        style={styles.iconStyle}
                        resizeMode="contain"
                        source={{ uri: "https://cdn-icons-png.flaticon.com/512/187/187210.png" }} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => Linking.openURL("https://instagram.com")}>
                    <Image
                        style={styles.iconStyle}
                        resizeMode="contain"
                        source={{ uri: "https://cdn-icons-png.flaticon.com/512/1409/1409946.png" }} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => Linking.openURL("https://discord.com")}>
                    <Image
                        style={styles.iconStyle}
                        resizeMode="contain"
                        source={{ uri: "https://cdn-icons-png.flaticon.com/512/906/906361.png" }} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default About

const styles = StyleSheet.create({
    aboutContainer: {
        display: "flex",
        alignItems: "center",
    },
    imgStyle: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    mainHeader: {
        fontSize: 18,
        color: "#344055",
        textTransform: "uppercase",
        fontWeight: 500,
        marginTop: 50,
        marginBottom: 10,
        fontFamily: "Main",
    },
    paraStyle: {
        fontSize: 18,
        color: "#7d7d7d",
        paddingBottom: 30,
    },
    aboutLayout: {
        backgroundColor: "#4c5dab",
        paddingHorizontal: 30,
        marginVertical: 30,
    },
    aboutSubHeader: {
        fontSize: 18,
        color: "#fff",
        textTransform: "uppercase",
        fontWeight: 500,
        marginVertical: 15,
        fontFamily: "Main",
        alignSelf: "center",
    },
    aboutPara: {
        color: "#fff",
    },
    menuContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    iconStyle: {
        width: "100%",
        height: 50,
        aspectRatio: 16 / 9,
    }
})
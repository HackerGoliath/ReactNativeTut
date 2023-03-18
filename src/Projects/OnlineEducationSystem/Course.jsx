import { FlatList, StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Courses from './api/Courses'

const Course = ({ navigation }) => {
    const courseCard = ({ item }) => {
        return <View style={styles.mainContainer}>
            <View style={styles.courseContainer}>
                <View>
                    <Image style={styles.cardImage}
                        source={item.image}
                        resizeMode="contain"
                    />
                </View>
                <Text style={styles.mainHeader}>
                    {item.title}
                </Text>
                <Text style={styles.description}>
                    {item.description}
                </Text>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonStyle}
                        onPress={() => navigation.navigate("CourseDetails")}>
                        <Text style={styles.buttonText}>Course Details</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    }

    return (
        <FlatList
            data={Courses}
            keyExtractor={(key) => key.id}
            renderItem={courseCard}
        />
    )
}

export default Course

const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 20,
    },
    courseContainer: {
        padding: 30,
        backgroundColor: "rgba(255,255,255,0.90)",
        textAlign: "center",
        borderRadius: 5,
        shadowColor: "grey",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 8,
        marginVertical: 30,
    },
    cardImage: {
        width: "100%",
        height: undefined,
        aspectRatio: 16 / 9,
    },
    mainHeader: {
        fontSize: 22,
        color: "#344055",
        textTransform: "uppercase",
        fontWeight: 500,
        paddingVertical: 15,
        textAlign: "center",
        fontFamily: "Regular",
    },
    description: {
        textAlign: "left",
        fontWeight: 400,
        fontFamily: "Main",
        fontSize: 16,
        paddingBottom: 15,
        lineHeight: 20,
        color: "#7d7d7d",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
    },
    buttonStyle: {
        backgroundColor: "#809fff",
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        fontSize: 20,
        color: "#eee",
        fontWeight: 500,
        fontFamily: "Main",
        textTransform: "capitalize",
    }
})
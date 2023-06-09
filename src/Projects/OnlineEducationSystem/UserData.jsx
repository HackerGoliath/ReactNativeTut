import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import React, { useState, useEffect } from 'react'

const UserData = () => {
    const [isLoaded, setIsLoaded] = useState(true)
    const [myData, setMyData] = useState([])
    const getUserData = async () => {
        try {
            const response = await fetch("https://thapatechnical.github.io/userapi/users.json")
            const data = await response.json();
            setMyData(data);
            setIsLoaded(false)
            // console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => { getUserData() }, [])

    // render students card
    const showUserData = ({ item }) => {
        return <View style={styles.card}>
            <View style={styles.imgContainer}>
                <Image style={styles.imgStyle}
                    source={{ uri: item.image }}
                />
            </View>
            <View>
                <View style={styles.bioDataContainer}>
                    <Text style={styles.bioData}> Bio-Data </Text>
                    <Text style={styles.idNumber}>
                        {item.id < 10 ? `#0${item.id}` : `#${item.id}`}
                    </Text>
                </View>

                <View style={styles.mainContent}>
                    <Text style={styles.myName}> Name: {item.name}</Text>
                    <Text style={styles.myName}> Email: {item.email}</Text>
                    <Text style={styles.myName}> Mobile: {item.mobile}</Text>
                </View>
            </View>
        </View>
    }
    return (
        <View>
            <Text style={styles.mainHeader}>List of Students</Text>
            <FlatList
                keyExtractor={(item) => item.id}
                data={myData}
                renderItem={showUserData}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default UserData

const styles = StyleSheet.create({
    card: {
        width: 250,
        height: 350,
        backgroundColor: "#fff",
        borderRadius: 5,
        margin: 20,
    },
    bioDataContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#353535",
        paddingVertical: 10,
        fontFamily: "Main",
        fontWeight: 400,
    },
    idNumber: {
        fontSize: 20,
        color: "rgba(255,255,255,0.5)",
        fontFamily: "Main",
        fontWeight: 400,
        paddingRight: 5,
    },
    bioData: {
        fontSize: 20,
        color: "#fff",
        fontFamily: "Main",
        fontWeight: 400,
    },
    mainHeader: {
        fontSize: 30,
        color: "#a18ce5",
        textAlign: "center",
        fontFamily: "Main",
        fontWeight: 400,
        marginTop: 5,
    },
    imgContainer: {
        padding: 10,
    },
    imgStyle: {
        width: "100%",
        height: 180,
    },
    mainContent: {
        padding: 10,
        backgroundColor: "#353535",
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
    myName: {
        fontSize: 14,
        color: "#fff",
        marginBottom: 10,
        alignSelf: "flex-start",
        textTransform: "capitalize",
        fontFamily: "Main",
        fontWeight: 400,
    }
})
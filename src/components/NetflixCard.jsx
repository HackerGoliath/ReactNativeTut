import { StyleSheet, Text, View, Image, Button, Linking } from 'react-native'
import React from 'react'

const NetflixCard = () => {
    return (
        <View>
            <Text style={styles.header}>Netflix Card</Text>
            <View style={styles.poster}>
                <Image
                    style={styles.imgStyle}
                    source={{
                        uri: 'https://www.pinkvilla.com/imageresize/all_of_us_are_dead_imp_poster_main_0.jpg?width=752&t=pvorg',
                    }}
                />
                <View style={styles.poster_info} >
                    <Text style={styles.poster_title}>All Of Us Are Dead</Text>
                    <Text style={styles.poster_text}>A high school becomes ground zero for a zombie virus outbreak. Trapped students must fight their way out — or turn into one of the rabid ...
                        You visited this page on 15/2/23.</Text>
                </View>
                <Button title="Watch Now"
                    onPress={() => Linking.openURL('https://www.netflix.com/in/title/81237994')}
                />
            </View >
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
        fontSize: 30,
        marginBottom: 20,
    },
    poster: {
        width: 250,
        borderWidth: 1,
        alignItems: "center",
    },
    poster_info: {
        alignItems: "center",
        marginVertical: 10,
    },
    poster_title: {
        fontSize: 20,
        marginBottom: 10,
    },
    poster_text: {
        color: "#999",
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    imgStyle: {
        width: "100%",
        height: undefined,
        aspectRatio: 1,
    },
    buttonStyle: {
        borderWidth: 0,
        borderRadius: 20,
    }
})

export default NetflixCard
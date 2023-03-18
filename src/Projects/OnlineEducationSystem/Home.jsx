import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Menu from './components/Menu';


const Home = (props) => {

    const description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae dolorem modi consequatur nihil quis praesentium voluptas quasi? Facilis cum, voluptas maiores iusto ipsa eos libero porro optio suscipit sint praesentium soluta culpa accusantium eaque.";
    return (
        <View style={styles.mainContainer}>
            <View style={styles.homeTop}>
                <Image style={styles.headerImage}
                    resizeMode="contain"
                    source={require('../../../assets/logo.jpg')} />
                <Text style={styles.mainHeader}>Welcome to</Text>
                <Text style={[styles.mainHeader,
                {
                    fontSize: 33,
                    color: "#4c5dab",
                    marginTop: 0,
                },
                ]}>{props.channelName}</Text>
                <Text style={styles.paraStyle}>{description}</Text>
            </View>
            <View>
                <View style={styles.menuStyle}>
                    <View style={styles.lineStyle}></View>
                    <Menu />
                    <View style={[styles.lineStyle, { marginVertical: 10 }]}></View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    // Project Style:
    mainContainer: {
        flex: 1,
        height: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        backgroundColor: "#fff",
        textAlign: "center",
    },
    homeTop: {
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
    },
    headerImage: {
        height: undefined,
        width: "100%",
        aspectRatio: 1,
        borderRadius: 20,
        marginTop: 10,
    },
    mainHeader: {
        fontSize: 30,
        color: "#344055",
        textTransform: "uppercase",
        fontFamily: "Regular",
        fontWeight: 600,
    },
    paraStyle: {
        textAlign: "left",
        fontSize: 19,
        color: "#7d7d7d",
        marginTop: 30,
        paddingBottom: 50,
        lineHeight: 26,
        fontFamily: "Main",
        fontWeight: 400,
    },
    lineStyle: {
        marginBottom: 10,
        borderWidth: 0.5,
        borderColor: "grey",
    }
})

export default Home

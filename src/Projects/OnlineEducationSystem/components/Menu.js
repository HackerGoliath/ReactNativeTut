import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Menu = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.menuContainer}>
            <TouchableOpacity style={styles.buttonStyle}
                onPress={() => navigation.navigate("Course")}>
                <Text>Course</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle}
                onPress={() => navigation.navigate("Student")}>
                <Text>Student</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle}
                onPress={() => navigation.navigate("About")}>
                <Text>About</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle}
                onPress={() => navigation.navigate("Contact")}>
                <Text>Contact</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Menu

const styles = StyleSheet.create({
    menuContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    }
})
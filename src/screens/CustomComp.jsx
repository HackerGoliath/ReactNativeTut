// import libraries to create compenents
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// create a component that return some jsx / simple function
const CustomComp = () => {
    return (
        <View>
            <Text style={styles.textStyle}>Hello World! from React Native from Custom Component</Text>
        </View>
    );
}

// Create a stylesheet to style the component
const styles = StyleSheet.create({
    textStyle: {
        color: "blue",
    }
});

// export the file so that you can use it in elsewhere in project
export default CustomComp;

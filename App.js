// import libraries to create compenents
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// create a component that return some jsx / simple function
const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Hello World! from React Native</Text>
    </View>
  );
}

// Create a stylesheet to style the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: "red",
  }
});

// export the file so that you can use it in elsewhere in project
export default App;

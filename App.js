// import libraries to create compenents
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomComp from './src/screens/CustomComp';

// create a component that return some jsx / simple function
const App = () => {
  const myName = "Deepak";

  const myElement = <Text>Hello World! {myName} from React Native from element</Text>
  const getFullName = (fname, mname, lname) => {
    return `${fname} ${mname} ${lname}`
  }
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Hello World! {myName} from React Native from App</Text>
      <CustomComp />
      {myElement}
      <Text>Hi my full name is : {getFullName("Deepak", "Bhai", "Banarasi")}</Text>
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

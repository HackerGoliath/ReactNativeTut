// import libraries to create compenents
import { StyleSheet, View } from 'react-native';
import NetflixCard from './src/components/NetflixCard';
import BoxModel from './src/screens/BoxModel';
// import ButtonDemo from './src/screens/ButtonDemo';
// import CustomComp from './src/screens/CustomComp';
// import FirstChallenge from './src/screens/FirstChallenge';
// import FlatListDemo from './src/screens/FlatListDemo';
// import Images from './src/screens/Images';


// create a component that return some jsx / simple function
const App = () => {
  // const myName = "Deepak";

  // const myElement = <Text>Hello World! {myName} from React Native from element</Text>
  // const getFullName = (fname, mname, lname) => {
  //   return `${fname} ${mname} ${lname}`
  // }
  return (
    // <View>
    <View style={styles.container}>
      {/* <Text style={styles.textStyle}>Hello World! {myName} from React Native from App</Text>
      <CustomComp />
      {myElement}
      <Text>Hi my full name is : {getFullName("Deepak", "Bhai", "Banarasi")}</Text> */}
      {/* ==================================================================================================== */}

      {/* Challenge-1 Show Three Different Paragraphs */}
      {/* <FirstChallenge /> */}

      {/* FlatList */}
      {/* <FlatListDemo /> */}

      {/* Images and Props */}
      {/* <Images /> */}

      {/* Buttons and TouchableOpacity */}
      {/* <ButtonDemo /> */}

      {/* Card */}
      {/* <NetflixCard /> */}

      {/* Box Model */}
      <BoxModel />

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
  },
});

// export the file so that you can use it in elsewhere in project
export default App;

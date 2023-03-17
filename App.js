// import libraries to create compenents
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Projects/OnlineEducationSystem/Home';
import About from './src/Projects/OnlineEducationSystem/About';
import Contact from './src/Projects/OnlineEducationSystem/Contact';
import Course from './src/Projects/OnlineEducationSystem/Course';
import UserData from './src/Projects/OnlineEducationSystem/UserData';
// import Contact from './src/screens/Form/Contact';
// import Home from './src/screens/Form/Home';
// import HookEffect from './src/screens/HookEffect';
// import ColorGenerator from './src/Projects/ColorGenerator';
// import CounterNumber from './src/screens/CounterNumber';
// import Positions from './src/screens/Positions';
// import NetflixCard from './src/components/NetflixCard';
// import BoxModel from './src/screens/BoxModel';
// import Challeng2SrollingEffects from './src/screens/Challeng2SrollingEffects';
// import FlexBox from './src/screens/FlexBox';
// import ButtonDemo from './src/screens/ButtonDemo';
// import CustomComp from './src/screens/CustomComp';
// import FirstChallenge from './src/screens/FirstChallenge';
// import FlatListDemo from './src/screens/FlatListDemo';
// import Images from './src/screens/Images';


// create a component that return some jsx / simple function
const App = () => {
  const Stack = createNativeStackNavigator();

  // const myName = "Deepak";

  // const myElement = <Text>Hello World! {myName} from React Native from element</Text>
  // const getFullName = (fname, mname, lname) => {
  //   return `${fname} ${mname} ${lname}`
  // }
  return (
    // <View>
    //  <View style={styles.container}>
    //    <Text style={styles.textStyle}>Hello World! {myName} from React Native from App</Text>
    //   <CustomComp />
    //   {myElement}
    //   <Text>Hi my full name is : {getFullName("Deepak", "Bhai", "Banarasi")}</Text>
    //   ====================================================================================================

    //   Challenge-1 Show Three Different Paragraphs
    //   <FirstChallenge />

    //     FlatList
    //   <FlatListDemo />

    //    Images and Props
    //    <Images />
    //  Buttons and TouchableOpacity
    //    <ButtonDemo />
    //  Card
    //    <NetflixCard />
    //  Box Model
    //    <BoxModel />
    //  Challenge-2 Scrolling Effects FlatList
    //    <Challeng2SrollingEffects />
    //  FlexBox
    //    <FlexBox />
    //  Positions
    //    <Positions />
    //  UseState Hook
    //    <CounterNumber />
    //  Project-1: Random Color Generator
    //    <ColorGenerator />
    //  useEffect Hook
    //    <HookEffect />
    //  React Navigation v6
    //    Form Login
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName='Login'>
    //     <Stack.Screen name="Login" component={Contact} />
    //     <Stack.Screen name="Home" component={Home} />
    //   </Stack.Navigator>
    // </NavigationContainer>


    // Project: Online Education System
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        {/* <Stack.Screen name="Home" component={Home} /> */}
        {/* Home Screen */}
        <Stack.Screen name="Home">
          {(props) => <Home {...props} channelName="Deepak Technical" />}
        </Stack.Screen>

        {/* Course Screen */}
        <Stack.Screen name="Course" component={Course} />
        <Stack.Screen name="Student" component={UserData} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Contact" component={Contact} />

      </Stack.Navigator>
    </NavigationContainer>

    // </View>
  );
}

// Create a stylesheet to style the component
const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // textStyle: {
  //   color: "red",
  // },
});

// export the file so that you can use it in elsewhere in project
export default App;

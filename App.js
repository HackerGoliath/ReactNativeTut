// import libraries to create compenents
import { StyleSheet, View, Image, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Projects/OnlineEducationSystem/Home';
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
  const description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae dolorem modi consequatur nihil quis praesentium voluptas quasi? Facilis cum, voluptas maiores iusto ipsa eos libero porro optio suscipit sint praesentium soluta culpa accusantium eaque.";
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
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}>
        <Image style={styles.headerImage}
          resizeMode="contain"
          source={require('./assets/logo.jpg')} />
        <Text style={styles.mainHeader}>Welcome to</Text>
        <Text style={[styles.mainHeader,
        {
          fontSize: 33,
          color: "#4c5dab",
          marginTop: 0,
        },
        ]}>Deepak Technical</Text>
        <Text style={styles.paraStyle}>{description}</Text>
      </View>
    </View>

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
    marginTop: 50,
  },
  mainHeader: {
    fontSize: 30,
    color: "#344055",
    textTransform: "uppercase",
  },
  paraStyle: {
    textAlign: "left",
    fontSize: 19,
    color: "#7d7d7d",
    marginTop: 30,
    paddingBottom: 50,
    lineHeight: 26,
  },
});

// export the file so that you can use it in elsewhere in project
export default App;

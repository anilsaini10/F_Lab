import { NativeBaseProvider } from "native-base";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

// screens
import Home from "./screens/Home";
import DetailsScreen from "./screens/DetailScreen";

// components
import HorizontalCard from "./components/HorizontalCard";
import VerticalCard from "./components/VerticalCard";
import Header from "./components/Header";
import LoginScreen from "./screens/LoginScreen";

const Stack = createStackNavigator();


export default function App() {
  return (
    <>
      <NativeBaseProvider>
        {/* <Header /> */}
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="DetailsScreen" component={DetailsScreen} options={() => ({
              presentation: "transparentModal",
              headerShown: false,
              contentStyle: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
            })} />
            <Stack.Screen name="VerticalCard" component={VerticalCard} />
            <Stack.Screen name="HorizontalCard" component={HorizontalCard} />

          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </>

  );
}


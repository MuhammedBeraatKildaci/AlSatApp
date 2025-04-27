
import SplashScreen from "./src/screens/SplashScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from "./src/navigation/TabNavigator";
import ProductAddScreen from "./src/screens/ProductAddScreen";

const Stack = createNativeStackNavigator();

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  SplashScreen: undefined;
  ShowcaseScreen: undefined;
};

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen}/>
      <Stack.Screen name="Home" component={TabNavigator}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

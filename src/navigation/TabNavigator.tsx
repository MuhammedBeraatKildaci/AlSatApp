import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShowcaseScreen from "../screens/ShowcaseScreen";
import PersonalizedScreen from "../screens/PersonalizedScreen";
import ProductAddScreen from "../screens/ProductAddScreen";
import ServiceScreen from "../screens/ServiceScreen";
import SearchScreen from "../screens/SearchScreen";
import { Entypo } from "@expo/vector-icons";
import Props from "../utils/NavigationType";  
import { View } from "react-native";
const Tab = createBottomTabNavigator();

const TabNavigator = ({ navigation }: Props) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          color = focused ? "#E9C46A" : "#f8f9fa";
          size = focused ? 28 : 24;
          let iconName;
          if (route.name === "Home") {
            iconName = <Entypo name="grid" color={color} size={size} />;
          } else if (route.name === "Personalized") {
            iconName = <Entypo name="user" color={color} size={size} />;
          } else if (route.name === "ProductAdd") {
            iconName = (
              <View className="absolute bottom-[3px] w-[75px] h-[75px] bg-tertiary rounded-full items-center justify-center">
                <Entypo name="circle-with-plus" color={color} size={36} />
              </View>
            );
          } else if (route.name === "Search") {
            iconName = (
              <Entypo name="magnifying-glass" color={color} size={size} />
            );
          } else if (route.name === "Service") {
            iconName = <Entypo name="cog" color={color} size={size} />;
          }
          return iconName;
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#264653",
        tabBarInactiveTintColor: "#666666",
        tabBarStyle: {
          backgroundColor: "#2A9D8F",
          borderTopWidth: 1,
          padding: 10,
        },
        headerStyle: {
          backgroundColor: "#2A9D8F",
        },
        headerTitleStyle: {
          color: "#f8f9fa",
          fontSize: 20,
          fontWeight: "bold",
        },
      })}
    >
      <Tab.Screen name="Home" component={ShowcaseScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="ProductAdd" component={ProductAddScreen} />
      <Tab.Screen name="Personalized" component={PersonalizedScreen} />
      <Tab.Screen name="Service" component={ServiceScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

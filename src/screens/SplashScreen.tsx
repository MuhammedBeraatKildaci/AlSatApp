import { StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useEffect } from "react";
import Props from "../utils/NavigationType";

const SplashScreen = ({navigation}: Props) => {
  useEffect(() => {
    const timeout = setTimeout(() => {  
      navigation.replace("Home");
    }, 1000);
    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View className="bg-primary flex-1 items-center justify-center">
      <Entypo name="wallet" size={182} color="#F9F9F9" />
      <Text className="text-white text-4xl font-bold text-center px-4 py-2 rounded-md">
        AlSat
      </Text>
    </View>
  );
};

export default SplashScreen;

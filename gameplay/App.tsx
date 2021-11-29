import React from "react";
import { View, Text } from "react-native";
import { SignIn } from "./src/screens/SignIn";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from "@expo-google-fonts/rajdhani";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <SignIn />;
  }
}

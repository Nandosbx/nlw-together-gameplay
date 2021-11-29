import React from "react";
import { View, Text } from "react-native";
import { SignIn } from "./src/screens/SignIn";
import AppLoading from "expo-app-loading";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <SignIn />;
  }
}

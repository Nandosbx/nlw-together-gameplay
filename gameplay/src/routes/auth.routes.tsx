import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";

import { Home } from "../screens/Home";
import { SignIn } from "../screens/SignIn";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{ cardStyle: { background: "transparent" } }}
    >
      <Screen name="SignIn" componenet={SignIn} />
      <Screen name="Home" componenet={Home} />
    </Navigator>
  );
}

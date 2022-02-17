import React, { ReactNode } from "react";
import { LinearGradient } from "@expo-linear-gradient";
import { View } from "react-native";

import { styles } from "./styles";
import { theme } from "../../global/styles/themes";

type Props = {
  title: string;
  action?: ReactNode;
};

export function Header({ title, action }: Props) {
  const { secondary40, secondary100 } = theme.colors;

  return <LinearGradient colors={[secondary40, secondary100]}></LinearGradient>;
}

import React from "react";

import { View, Image } from "react-native";

import { styles } from "./styles";

export function GuildIcon() {
  const uri = "https://img.icons8.com/color/344/discord-logo.png";
  return <Image source={{ uri }} style={styles.image} resizeMode="cover" />;
}

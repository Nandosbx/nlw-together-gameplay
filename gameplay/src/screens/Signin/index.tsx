import React from "react";

import { View, Text, Image } from "react-native";

import IllustrationImg from "../../assets/illustration.png";
import { styles } from "./styles";

export function Signin() {
  return (
    <View>
      <Image source={IllustrationImg} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title}></Text>
      </View>
    </View>
  );
}

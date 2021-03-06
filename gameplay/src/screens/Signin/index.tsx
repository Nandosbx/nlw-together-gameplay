import { useNavigation } from "@react-navigation/native";
import React from "react";

import { View, Text, Image } from "react-native";

import IllustrationImg from "../../assets/illustration.png";
import { Background } from "../../components/Background";
import { ButtonIcon } from "../../components/ButtonIcon";

import { styles } from "./styles";

export function SignIn() {
  const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate("Home");
  }
  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={IllustrationImg}
          style={styles.image}
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Organize {"\n"}
            suas jogatinas {"\n"}
            facilmente.
          </Text>

          <Text style={styles.subtitle}>
            Conecte-se{"\n"} e organize suas jogatinas{"\n"}
            facilmente
          </Text>

          <ButtonIcon onPress={handleSignIn} title="Entrar com Discord" />
        </View>
      </View>
    </Background>
  );
}

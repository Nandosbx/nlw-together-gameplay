import React from "react";

import { View, Text } from "react-native";
import { Background } from "../../components/Background";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { Profile } from "../../components/Profile";

import { ScrollView } from "react-native";

import { styles } from "./styles";

export function Home() {
  return (
    <Background>
      <View>
        <View style={styles.header}>
          <Profile />
          <ButtonAdd />
        </View>

        <View>
          <CategorySelect categorySelected/>
        </View>
      </View>
    </Background>
  );
}

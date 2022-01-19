import React from "react";

import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { categories } from "../../utils/categories";
import { styles } from "./styles";

export function CategorySelect() {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        style={styles.container}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 40 }}
      >
        {categories.map((category) => (
          <Category />
        ))}
      </ScrollView>
    </View>
  );
}

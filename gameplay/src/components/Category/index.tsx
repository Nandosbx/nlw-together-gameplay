import React from "react";

import { View, Text } from "react-native";
import { SvgProps } from "react-native-svg";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { theme } from "../../global/styles/themes";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";

type Props = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  hasCheckBox: boolean;
  checked?: boolean;
};

export function Category({
  title,
  icon: Icon,
  checked = false,
  hasCheckBox = false,
  ...rest
}: Props) {
  const { secondary40, secondary50, secondary70, secondary85 } = theme.colors;

  return (
    <RectButton {...rest}>
      <LinearGradient
        colors={[secondary50, secondary70]}
        style={styles.container}
      >
        <LinearGradient
          style={[styles.content, { opacity: checked ? 1 : 0.5 }]}
          colors={[checked ? secondary85 : secondary50, secondary40]}
        >
          {hasCheckBox && (
            <View style={checked ? styles.checked : styles.check} />
          )}

          <Icon width={48} height={48} />
          <Text style={styles.title}> {title}</Text>
        </LinearGradient>
      </LinearGradient>
    </RectButton>
  );
}

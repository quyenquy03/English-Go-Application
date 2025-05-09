import React from "react";
import { Text, View } from "react-native";
import ButtonBack from "../ButtonBack";
import StackHeaderStyles from "./StackHeader.style";

interface StackHeaderProps {
  showBackButton?: boolean;
  title: string;
}
const StackHeader = ({ showBackButton, title }: StackHeaderProps) => {
  return (
    <View style={StackHeaderStyles.container}>
      {showBackButton && <ButtonBack />}
      <Text style={StackHeaderStyles.title}>{title}</Text>
    </View>
  );
};

export default StackHeader;

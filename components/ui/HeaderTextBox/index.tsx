import IMAGES from "@/constants/images";
import React from "react";
import { Image, Text, View } from "react-native";
import HeaderTextBoxStyles from "./HeaderTextBox.style";

interface HeaderTextBoxProps {
  titleText: React.ReactNode;
  descriptionText?: React.ReactNode;
}
const HeaderTextBox = ({ titleText, descriptionText }: HeaderTextBoxProps) => {
  return (
    <View>
      <Text style={HeaderTextBoxStyles.titleText}>{titleText}</Text>
      <View style={HeaderTextBoxStyles.decorationBox}>
        <Image style={HeaderTextBoxStyles.decorationImage} source={IMAGES.headerSpace} resizeMode='contain' />
      </View>
      <Text style={HeaderTextBoxStyles.descriptionText}>{descriptionText}</Text>
    </View>
  );
};

export default HeaderTextBox;

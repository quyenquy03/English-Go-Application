import React from "react";
import { Pressable, Text, View } from "react-native";
import RadioCustomStyles from "./RadioCustom.style";

interface RadioCustomProps {
  checked?: boolean;
  onChecked?: () => void;
  title?: string;
}
const RadioCustom = ({ checked = false, onChecked = () => {}, title }: RadioCustomProps) => {
  return (
    <Pressable onPress={onChecked} style={RadioCustomStyles.container}>
      <View style={RadioCustomStyles.radioBox}>
        <View style={RadioCustomStyles.radio}>{checked && <View style={RadioCustomStyles.radioInner}></View>}</View>
      </View>
      {title && (
        <View style={RadioCustomStyles.titleBox}>
          <Text style={RadioCustomStyles.titleText}>{title}</Text>
        </View>
      )}
    </Pressable>
  );
};

export default RadioCustom;

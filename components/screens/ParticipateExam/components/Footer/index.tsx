import React from "react";
import { Pressable, Text, View } from "react-native";
import FooterStyles from "./Footer.style";

const Footer = () => {
  return (
    <View style={FooterStyles.container}>
      <Pressable style={FooterStyles.button}>
        <Text style={FooterStyles.buttonText}>Part 1</Text>
      </Pressable>
      <Pressable style={FooterStyles.button}>
        <Text style={FooterStyles.buttonText}>Part 2</Text>
      </Pressable>
      <Pressable style={FooterStyles.button}>
        <Text style={FooterStyles.buttonText}>Part 3</Text>
      </Pressable>
      <Pressable style={FooterStyles.button}>
        <Text style={FooterStyles.buttonText}>Part 4</Text>
      </Pressable>
    </View>
  );
};

export default Footer;

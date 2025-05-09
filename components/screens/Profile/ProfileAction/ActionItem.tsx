import COLORS from "@/constants/color";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { Pressable, Text, View } from "react-native";
import ProfileActionStyles from "./ProfileAction.style";

interface ActionItemProps {
  title: string;
  icon: string;
  onPress?: () => void;
}
const ActionItem = ({ title, icon, onPress }: ActionItemProps) => {
  return (
    <Pressable onPress={onPress} style={ProfileActionStyles.actionItem}>
      <View style={ProfileActionStyles.iconBox}>
        <FontAwesome name={icon as any} size={24} color={COLORS.secondary} />
      </View>
      <View style={ProfileActionStyles.titleBox}>
        <Text style={ProfileActionStyles.titleText}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default ActionItem;

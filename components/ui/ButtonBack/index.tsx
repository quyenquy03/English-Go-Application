import COLORS from "@/constants/color";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable } from "react-native";
import ButtonBackStyles from "./ButtonBack.style";
const ButtonBack = () => {
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };
  return (
    <Pressable style={ButtonBackStyles.container} onPress={handleGoBack}>
      <FontAwesome5 name='arrow-left' size={16} color={COLORS.secondary} />
    </Pressable>
  );
};

export default ButtonBack;

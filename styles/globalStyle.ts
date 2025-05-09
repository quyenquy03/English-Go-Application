import COLORS from "@/constants/color";
import FONTS from "@/constants/fonts";
import { StyleSheet } from "react-native";

const globalStyle = StyleSheet.create({
  headerText: {
    fontSize: 20,
    fontFamily: FONTS.MERIENDA_BOLD,
    color: COLORS.primary,
    textAlign: "center",
  },
});
export default globalStyle;

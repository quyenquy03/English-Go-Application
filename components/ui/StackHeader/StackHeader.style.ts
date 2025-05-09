import COLORS from "@/constants/color";
import FONTS from "@/constants/fonts";
import { StyleSheet } from "react-native";

const StackHeaderStyles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontFamily: FONTS.MERIENDA_BOLD,
    color: COLORS.primary,
    marginLeft: 10,
  },
});
export default StackHeaderStyles;

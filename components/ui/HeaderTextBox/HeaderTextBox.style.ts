import COLORS from "@/constants/color";
import FONTS from "@/constants/fonts";
import { StyleSheet } from "react-native";

const HeaderTextBoxStyles = StyleSheet.create({
  container: {},
  titleText: {
    fontSize: 24,
    fontFamily: FONTS.MERIENDA_BOLD,
    color: COLORS.primary,
    textAlign: "center",
  },
  descriptionText: {
    fontFamily: FONTS.MERIENDA_LIGHT,
    color: COLORS.secondary,
    fontSize: 12,
    textAlign: "center",
  },
  decorationBox: {
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
  },
  decorationImage: {
    width: 200,
    height: 50,
  },
});

export default HeaderTextBoxStyles;

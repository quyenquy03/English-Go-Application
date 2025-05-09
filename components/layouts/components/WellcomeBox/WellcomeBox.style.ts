import COLORS from "@/constants/color";
import FONTS from "@/constants/fonts";
import { StyleSheet } from "react-native";

const WellcomeBoxStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  content: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  image: {
    width: 80,
    height: 100,
  },
  textBox: {
    marginLeft: 10,
  },
  appNameText: {
    color: COLORS.textWhite,
    fontFamily: FONTS.MERIENDA_BOLD,
    fontSize: 25,
  },
  helloText: {
    color: COLORS.textWhite,
    fontFamily: FONTS.MERIENDA_REGULAR,
    fontSize: 15,
  },
  wellcomeText: {
    color: COLORS.textWhite,
    fontFamily: FONTS.MERIENDA_MEDIUM,
    fontSize: 11,
  },
});

export default WellcomeBoxStyles;

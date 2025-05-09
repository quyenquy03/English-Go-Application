import COLORS from "@/constants/color";
import FONTS from "@/constants/fonts";
import { StyleSheet } from "react-native";

const RadioCustomStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 3,
    marginBottom: 3,
  },
  radioBox: {
    marginRight: 10,
  },
  radio: {
    width: 15,
    height: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: COLORS.dark,
    alignItems: "center",
    justifyContent: "center",
  },
  radioInner: {
    width: 7,
    height: 7,
    borderRadius: 5,
    backgroundColor: COLORS.dark,
    filter: "blur(1px)",
  },
  titleBox: {
    flex: 1,
  },
  titleText: {
    fontSize: 13,
    lineHeight: 18,
    color: COLORS.dark,
    fontFamily: FONTS.MERIENDA_REGULAR,
    textAlign: "justify",
  },
});
export default RadioCustomStyles;

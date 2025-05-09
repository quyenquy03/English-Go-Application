import COLORS from "@/constants/color";
import FONTS from "@/constants/fonts";
import { StyleSheet } from "react-native";

const FooterStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    gap: 10,
    height: "100%",
    padding: 10,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.bgPrimary,
    padding: 5,
    height: 40,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 15,
    fontFamily: FONTS.MERIENDA_BOLD,
    color: COLORS.secondary,
  },
});
export default FooterStyles;

import COLORS from "@/constants/color";
import FONTS from "@/constants/fonts";
import { StyleSheet } from "react-native";

const wellcomeStyle = StyleSheet.create({
  tab: {
    height: "100%",
    alignItems: "center",
    backgroundColor: COLORS.backgroundPrimary,
  },
  imageBox: {
    backgroundColor: "#ffeff8",
    marginBottom: 20,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomRightRadius: 60,
    borderBottomLeftRadius: 60,
    boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
  },
  textBox: {
    display: "flex",
    alignItems: "center",
    padding: 20,
    minHeight: 230,
  },
  tabTitle: {
    fontSize: 22,
    color: COLORS.primary,
    fontFamily: FONTS.MERIENDA_BOLD,
    textAlign: "center",
  },
  tabDescription: {
    fontSize: 16,
    color: COLORS.secondary,
    fontFamily: FONTS.MERIENDA_REGULAR,
    textAlign: "center",
  },
  tabButton: {
    position: "absolute",
    bottom: 40,
    left: "50%",
    transform: [{ translateX: "-50%" }],
    width: 200,
    marginTop: 20,
    padding: 10,
    backgroundColor: COLORS.secondary,
    borderColor: COLORS.secondary,
    borderRadius: 50,
    fontFamily: FONTS.MERIENDA_EXTRA_BOLD,
  },
  tabButtonText: {
    color: COLORS.textWhite,
    fontSize: 16,
    fontFamily: FONTS.MERIENDA_BOLD,
    textAlign: "center",
    textDecorationStyle: "solid",
  },
  skipButton: {
    position: "absolute",
    top: 5,
    right: 20,
    fontFamily: FONTS.MERIENDA_BOLD,
  },
  skipButtonText: {
    color: COLORS.primary,
    fontSize: 16,
    fontFamily: FONTS.MERIENDA_REGULAR,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.primary,
  },
});
export default wellcomeStyle;

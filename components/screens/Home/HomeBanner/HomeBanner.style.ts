import COLORS from "@/constants/color";
import FONTS from "@/constants/fonts";
import { StyleSheet } from "react-native";

const HomeBannerStyles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  list: {
    gap: 10,
  },
  item: {
    backgroundColor: COLORS.backgroundPrimary,
    padding: 10,
    borderRadius: 10,
    boxShadow: "0 0 10px rgba(238, 102, 200, 0.43)",
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "stretch",
  },
  imageBox: {
    width: 120,
    height: 120,
  },
  image: {
    width: "100%",
    borderRadius: 10,
    height: "100%",
  },
  textBox: {
    flex: 1,
  },
  textHeader: {
    fontSize: 16,
    fontFamily: FONTS.MERIENDA_BOLD,
    color: COLORS.primary,
    textAlign: "center",
  },
  textDescription: {
    fontFamily: FONTS.MERIENDA_LIGHT,
    color: COLORS.secondary,
    fontSize: 12,
    textAlign: "center",
  },
  button: {
    backgroundColor: COLORS.secondary,
    padding: 10,
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    width: 150,
    height: 40,
    alignSelf: "center",
    boxShadow: "0 0 10px rgba(238, 102, 200, 0.43)",
  },
  buttonText: {
    color: COLORS.textWhite,
    fontFamily: FONTS.MERIENDA_MEDIUM,
    lineHeight: 20,
  },
  buttonShowDetail: {
    alignSelf: "center",
    marginTop: 10,
  },
  buttonShowDetailText: {
    color: COLORS.secondary,
    fontFamily: FONTS.MERIENDA_MEDIUM,
    lineHeight: 20,
    textDecorationColor: COLORS.secondary,
    textDecorationLine: "underline",
  },
});
export default HomeBannerStyles;

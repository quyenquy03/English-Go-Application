import COLORS from "@/constants/color";
import FONTS from "@/constants/fonts";
import { StyleSheet } from "react-native";

const HomeHeaderStyles = StyleSheet.create({
  container: {},
  list: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.backgroundPrimary,
    borderRadius: 10,
    padding: 10,
    boxShadow: "0 0 10px rgba(209, 57, 166, 0.51)",
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
  },
  image: {
    width: 40,
    height: 40,
  },
  text: {
    fontFamily: FONTS.MERIENDA_MEDIUM,
    color: COLORS.primary,
    fontSize: 12,
  },
});
export default HomeHeaderStyles;

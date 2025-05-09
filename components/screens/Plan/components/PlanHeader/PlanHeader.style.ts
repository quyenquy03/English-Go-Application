import COLORS from "@/constants/color";
import FONTS from "@/constants/fonts";
import { StyleSheet } from "react-native";

const PlanHeaderStyles = StyleSheet.create({
  container: {},
  descriptionText: {
    fontFamily: "Merienda-Light",
    fontSize: 14,
    textAlign: "center",
  },
  planHeaderItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    boxShadow: "0 0 10px rgba(238, 102, 200, 0.43)",
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  planItemImage: {
    width: 60,
    height: 60,
  },
  planItemText: {
    fontWeight: "600",
    fontFamily: FONTS.MERIENDA_EXTRA_BOLD,
    color: COLORS.primary,
  },
  planItemDescription: {
    fontFamily: FONTS.MERIENDA_LIGHT,
    color: COLORS.secondary,
  },
});
export default PlanHeaderStyles;

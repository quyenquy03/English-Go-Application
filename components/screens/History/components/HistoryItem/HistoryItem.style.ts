import COLORS from "@/constants/color";
import FONTS from "@/constants/fonts";
import { StyleSheet } from "react-native";

const HistoryItemStyles = StyleSheet.create({
  container: {
    minHeight: 100,
    backgroundColor: COLORS.backgroundPrimary,
    marginBottom: 10,
    borderRadius: 8,
    boxShadow: "0 0 10px rgba(238, 102, 200, 0.43)",
  },
  headerBox: {
    backgroundColor: COLORS.bgPrimary,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    height: 40,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  orderBox: {
    backgroundColor: COLORS.secondary,
    padding: 5,
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginRight: 5,
  },
  orderText: {
    fontFamily: FONTS.MERIENDA_BOLD,
    fontSize: 15,
    color: COLORS.bgPrimary,
    lineHeight: 20,
  },
  buttonShow: {
    backgroundColor: COLORS.secondary,
    justifyContent: "center",
    alignItems: "center",
    width: 32,
    height: 32,
    borderRadius: 50,
    padding: 5,
  },
  headerText: {
    fontFamily: FONTS.MERIENDA_EXTRA_BOLD,
    fontSize: 13,
    lineHeight: 20,
    color: COLORS.primary,
  },
  bodyBox: {
    padding: 10,
  },
  bodyRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  bodyColumn: {
    flex: 1,
  },
  bodyColumnText: {
    fontFamily: FONTS.MERIENDA_REGULAR,
    fontSize: 13,
    color: COLORS.secondary,
  },
  bodyColumnButton: {
    backgroundColor: COLORS.secondary,
    padding: 5,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  bodyButtonText: {
    fontFamily: FONTS.MERIENDA_REGULAR,
    fontSize: 12,
    color: COLORS.bgPrimary,
    textAlign: "center",
  },
});
export default HistoryItemStyles;

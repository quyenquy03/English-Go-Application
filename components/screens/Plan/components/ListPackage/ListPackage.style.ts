import COLORS from "@/constants/color";
import FONTS from "@/constants/fonts";
import { StyleSheet } from "react-native";

const ListPackageStyles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  descriptionText: {
    fontFamily: FONTS.MERIENDA_LIGHT,
    fontSize: 14,
    textAlign: "center",
  },
  packageItem: {
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    boxShadow: "0 0 10px rgba(238, 102, 200, 0.43)",
  },
  packageItemHeader: {
    textAlign: "center",
    marginBottom: 10,
  },
  packageItemHeaderText: {
    textAlign: "center",
    fontWeight: "600",
    fontFamily: FONTS.MERIENDA_EXTRA_BOLD,
    color: COLORS.primary,
  },
  packageItemDescription: {},
  packageItemDescriptionText: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 5,
  },
  packageItemDescriber: {
    marginTop: 10,
  },
  packageDescriberText: {
    fontWeight: "600",
    fontFamily: FONTS.MERIENDA_EXTRA_BOLD,
    color: COLORS.primary,
  },
  packageItemDescriberText: {
    fontFamily: FONTS.MERIENDA_MEDIUM,
    color: COLORS.secondary,
  },
  packageItemButton: {
    marginTop: 10,
    backgroundColor: COLORS.secondary,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    boxShadow: "0 0 10px rgba(238, 102, 200, 0.43)",
  },
  packageItemButtonText: {
    textAlign: "center",
    fontFamily: FONTS.MERIENDA_EXTRA_BOLD,
    color: "#fff",
  },
});
export default ListPackageStyles;

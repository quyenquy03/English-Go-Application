import COLORS from "@/constants/color";
import FONTS from "@/constants/fonts";
import { StyleSheet } from "react-native";

const ProfileActionStyles = StyleSheet.create({
  container: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: COLORS.secondary,
    borderRadius: 10,
    padding: 10,
    boxShadow: "0 0 10px rgba(238, 102, 200, 0.43)",
    gap: 10,
  },
  actionItem: {
    minHeight: 50,
    flexDirection: "row",
    alignItems: "center",

    gap: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: COLORS.backgroundPrimary,
    boxShadow: "0 0 10px rgba(238, 102, 200, 0.43)",
  },
  iconBox: {
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  titleBox: {},
  titleText: {
    color: COLORS.secondary,
    fontSize: 14,
    fontFamily: FONTS.MERIENDA_BOLD,
  },
});
export default ProfileActionStyles;

import COLORS from "@/constants/color";
import FONTS from "@/constants/fonts";
import { StyleSheet } from "react-native";

const HomeFeedbackStyles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  list: {
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
  },
  item: {
    width: 200,
    height: 250,
    borderRadius: 10,
    boxShadow: "0 0 10px rgba(238, 102, 200, 0.43)",
    margin: 5,
    padding: 10,
    backgroundColor: COLORS.backgroundPrimary,
  },
  avatarBox: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  avatar: {
    width: 70,
    height: 70,
    borderWidth: 2,
    borderColor: COLORS.secondary,
    borderRadius: 999,
  },
  contentBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 14,
    color: COLORS.primary,
    fontFamily: FONTS.MERIENDA_BOLD,
  },
  ratingBox: {
    flexDirection: "row",
    gap: 2,
    marginTop: 2,
  },
  feexbackContent: {
    fontFamily: FONTS.MERIENDA_MEDIUM,
    color: COLORS.secondary,
    fontSize: 11,
    textAlign: "center",
    marginTop: 5,
  },
});
export default HomeFeedbackStyles;

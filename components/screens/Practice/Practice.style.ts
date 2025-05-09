import COLORS from "@/constants/color";
import FONTS from "@/constants/fonts";
import { StyleSheet } from "react-native";

const PracticeStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bgPrimary },
  imageHeaderBox: {
    width: "100%",
    height: 240,
  },
  imageHeader: {
    // flex: 1,
    width: "100%",
    height: "100%",
  },
  contentBox: {
    width: "100%",
    marginTop: 20,
    padding: 10,
    position: "relative",
  },
  imageContent: {
    // flex: 1,
    width: "100%",
    height: "100%",
  },
  contentText: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  appNameText: {
    fontSize: 30,
    color: COLORS.textWhite,
    fontFamily: FONTS.MERIENDA_EXTRA_BOLD,
    marginBottom: 10,
  },
  titleBox: {
    position: "relative",
    width: "100%",
    minHeight: 70,
  },
  titleText: {
    fontSize: 22,
    lineHeight: 30,
    fontWeight: "bold",
    textTransform: "uppercase",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    color: COLORS.textWhite,
    letterSpacing: 2,
    userSelect: "none",
    textAlign: "center",
  },
  joinNowBtn: {
    marginTop: 0,
    borderRadius: 20,
    backgroundColor: COLORS.secondary,
    width: 150,
    height: 40,
  },
  joinNowBtnText: {
    color: COLORS.textWhite,
    textAlign: "center",
    lineHeight: 40,
    fontSize: 14,
    fontWeight: "bold",
  },
  banner2: {
    width: 230,
    height: 230,
    marginTop: 20,
    position: "absolute",
    right: 10,
    top: 110,
  },
  banner3: {
    width: 200,
    height: 200,
    marginTop: 20,
    position: "absolute",
    left: 0,
    top: 140,
  },
});
export default PracticeStyles;

import COLORS from "@/constants/color";
import FONTS from "@/constants/fonts";
import { StyleSheet } from "react-native";

const HeaderStyles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  headerBox: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: "100%",
    zIndex: 10,
    backgroundColor: COLORS.secondary,
    height: "100%",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  titleBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    color: COLORS.textWhite,
    fontFamily: FONTS.MERIENDA_BOLD,
    lineHeight: 30,
  },
  menuIcon: {
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: COLORS.bgPrimary,
    boxShadow: "0 0 10px rgba(238, 102, 200, 0.43)",
  },
  drawerBox: {
    paddingTop: 60,
  },
  questionBox: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  questionItem: {
    width: 30,
    height: 30,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.backgroundPrimary,
    boxShadow: "0 0 5px rgba(238, 102, 200, 0.43)",
  },
  questionItemActive: {
    backgroundColor: COLORS.bgPrimary,
  },
  questionItemText: {
    color: COLORS.secondary,
    lineHeight: 20,
    fontSize: 15,
    fontFamily: FONTS.MERIENDA_BOLD,
  },

  // TimeCountdown
  timeCountdownBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
    marginTop: 2,
  },

  minuteBox: {},
  secondBox: {},
  spaceBox: {},
  timeText: {
    fontSize: 23,
    color: COLORS.textWhite,
    fontFamily: FONTS.MERIENDA_BLACK,
    lineHeight: 28,
  },
});
export default HeaderStyles;

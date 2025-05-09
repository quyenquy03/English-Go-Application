import COLORS from "@/constants/color";
import FONTS from "@/constants/fonts";
import { StyleSheet } from "react-native";

const ExamRoomStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  buttonBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 350,
  },
  buttonStart: {
    width: 180,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.secondary,
    marginTop: -22,
    marginLeft: -4,
  },
  buttonStartText: {
    color: "white",
    fontSize: 20,
    fontFamily: FONTS.MERIENDA_SEMI_BOLD,
  },
  buttonLeave: {
    width: 270,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.danger,
  },
  buttonLeaveText: {
    color: "white",
    fontSize: 20,
    fontFamily: FONTS.MERIENDA_SEMI_BOLD,
  },
  buttonTab: {
    width: 40,
    height: 40,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.secondary,
  },
  tabBox: {
    position: "absolute",
    top: 55,
    left: "50%",
    transform: [{ translateX: "-50%" }],
    width: 280,
    height: 440,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 5,
    overflow: "hidden",
  },
  tab: {
    height: "100%",
  },
  bannerImage: {
    width: 380,
    height: 550,
  },
  tabItemContainer: {
    flex: 1,
    padding: 10,
  },
  tabItemHeader: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
    alignItems: "center",
  },
  tabItemOrder: {
    width: 30,
    height: 30,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.secondary,
    marginRight: 10,
  },
  tabItemOrderText: {
    color: "white",
    fontSize: 18,
    lineHeight: 25,
    fontFamily: FONTS.MERIENDA_SEMI_BOLD,
  },
  tabItemHeaderText: {
    color: COLORS.primary,
    fontSize: 16,
    lineHeight: 22,
    fontFamily: FONTS.MERIENDA_SEMI_BOLD,
  },
});
export default ExamRoomStyles;

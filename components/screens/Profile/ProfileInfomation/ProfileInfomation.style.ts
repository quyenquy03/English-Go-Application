import COLORS from "@/constants/color";
import FONTS from "@/constants/fonts";
import { StyleSheet } from "react-native";

const ProfileInfomationStyles = StyleSheet.create({
  container: {
    minHeight: 200,
    width: "100%",
    borderWidth: 1,
    borderColor: COLORS.secondary,
    marginTop: 50,
    borderRadius: 20,
    position: "relative",
    boxShadow: "0 0 10px rgba(238, 102, 200, 0.43)",
  },
  avatarBox: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    position: "absolute",
    top: -70,
    left: "50%",
    transform: [{ translateX: "-50%" }],
    backgroundColor: COLORS.bgPrimary,
  },
  avatarImage: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: COLORS.secondary,
    borderRadius: 999,
    boxShadow: "0 0 10px rgba(238, 102, 200, 0.43)",
  },
  contentBox: {
    padding: 10,
    marginTop: 45,
  },
  textName: {
    fontSize: 20,
    color: COLORS.primary,
    textAlign: "center",
    fontFamily: FONTS.MERIENDA_BOLD,
  },
  textUserName: {
    fontSize: 16,
    color: COLORS.secondary,
    textAlign: "center",
    fontFamily: FONTS.MERIENDA_LIGHT,
    lineHeight: 20,
  },
  statisticalBox: {
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 10,
    padding: 10,
  },
  statisticalItem: {
    flex: 1,
    borderRadius: 10,
    boxShadow: "0 0 10px rgba(238, 102, 200, 0.43)",
    backgroundColor: COLORS.backgroundPrimary,
  },
  statisticalItemTitle: {
    padding: 10,
    textAlign: "center",
    borderBottomWidth: 2,
    borderColor: COLORS.secondary,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  statisticalItemValue: {
    padding: 10,
    textAlign: "center",
    minHeight: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ProfileInfomationStyles;

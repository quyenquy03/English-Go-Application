import COLORS from "@/constants/color";
import { StyleSheet } from "react-native";

const ChangeAvatarStyles = StyleSheet.create({
  container: {
    width: 90,
    height: 90,
    borderRadius: "50%",
    borderWidth: 2,
    borderColor: COLORS.secondary,
    position: "relative",
    padding: 2,
  },
  avatarBox: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    overflow: "hidden",
    alignSelf: "center",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  },
  avatarImage: {
    width: "100%",
    height: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
  },
  cameraButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 30,
    height: 30,
    borderRadius: "50%",
    borderColor: COLORS.secondary,
    backgroundColor: COLORS.textWhite,
    padding: 2,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ChangeAvatarStyles;

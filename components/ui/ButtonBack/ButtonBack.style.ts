import COLORS from "@/constants/color";
import { StyleSheet } from "react-native";

const ButtonBackStyles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.backgroundPrimary,
    borderRadius: 5,
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  },
});
export default ButtonBackStyles;

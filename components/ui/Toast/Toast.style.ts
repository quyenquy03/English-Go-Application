import COLORS from "@/constants/color";
import { StyleSheet } from "react-native";

const ToastStyles = StyleSheet.create({
  container: {},
  toastInfoContainer: {
    borderLeftColor: COLORS.secondary,
  },
  toastSuccessContainer: {
    borderLeftColor: COLORS.success,
  },
  toastErrorContainer: {
    borderLeftColor: COLORS.danger,
  },
  contentContainer: {
    paddingHorizontal: 10,
  },
  text1: {
    fontSize: 15,
  },
  text2: {
    fontSize: 15,
    color: COLORS.dark,
  },
  iconBox: {
    height: "100%",
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
  },
});
export default ToastStyles;

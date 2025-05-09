import COLORS from "@/constants/color";
import FONTS from "@/constants/fonts";
import { StyleSheet } from "react-native";

const loginStyles = StyleSheet.create({
  loginContainer: {
    backgroundColor: COLORS.backgroundPrimary,
  },
  screenTitle: {
    fontSize: 25,
  },
  screenDescription: {
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center",
    fontSize: 15,
  },
  appName: {
    color: COLORS.secondary,
    fontFamily: FONTS.MERIENDA_BOLD,
    marginRight: 2,
  },
  formGroup: {
    marginTop: 10,
  },
  inputStyle: {
    padding: 10,
    textAlign: "center",
    borderRadius: 100,
    fontSize: 16,
    height: 50,
  },
  loginButton: {
    marginTop: 20,
    borderRadius: 100,
    backgroundColor: COLORS.secondary,
    borderColor: COLORS.secondary,
  },
  loginButtonText: {
    color: COLORS.primary,
    fontSize: 16,
  },
  forgotPassword: {
    textAlign: "right",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingRight: 10,
  },
  donHaveAccount: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  donHaveAccountText: {
    fontSize: 15,
  },
  registerNow: {
    marginLeft: 5,
  },
  registerNowText: {
    color: COLORS.primary,
    fontSize: 15,
    textDecorationLine: "underline",
    fontFamily: FONTS.MERIENDA_BOLD,
  },
});

export default loginStyles;

import COLORS from "@/constants/color";
import FONTS from "@/constants/fonts";
import { StyleSheet } from "react-native";

const UpdateProfileStyles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: COLORS.bgPrimary,
  },
  changeAvatarBox: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  formBox: {},
  formItem: {
    marginBottom: 20,
  },
  formItemLabel: {
    marginBottom: 5,
  },
  textLabel: {
    fontSize: 16,
    fontFamily: FONTS.MERIENDA_MEDIUM,
    color: COLORS.secondary,
  },
  formItemInputBox: {},

  flexRow: {
    flexDirection: "row",
    gap: 10,
  },
  flexCol: {
    flex: 1,
  },
  datePickerStyle: {
    width: "100%",
    height: 50,
    borderRadius: 10,
  },
});
export default UpdateProfileStyles;

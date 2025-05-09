import COLORS from "@/constants/color";
import FONTS from "@/constants/fonts";
import { hp, wp } from "@/helpers/common";
import { StyleSheet } from "react-native";

const ModalCustomStyles = StyleSheet.create({
  container: {
    width: "100%",
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalBox: {
    width: wp(95),
    position: "relative",
    backgroundColor: "white",
    borderRadius: 5,
    minHeight: 100,
    maxHeight: hp(80),
    boxShadow: "0 0 8px rgba(238, 102, 200, 0.43)",
  },
  closeIcon: {
    position: "absolute",
    top: 5,
    right: 5,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    backgroundColor: COLORS.bgPrimary,
    borderRadius: 5,
    boxShadow: "0 0 8px rgba(238, 102, 200, 0.43)",
  },
  headerBox: {
    minHeight: 40,
    backgroundColor: COLORS.secondary,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },
  headerTitle: {
    color: COLORS.textWhite,
    fontSize: 15,
    fontFamily: FONTS.MERIENDA_EXTRA_BOLD,
    lineHeight: 20,
    textAlign: "center",
    width: "100%",
  },
  bodyBox: {
    padding: 10,
  },
  footerBox: {
    minHeight: 40,
    backgroundColor: COLORS.bgPrimary,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    marginTop: 10,
    gap: 10,
  },
  button: {
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    paddingHorizontal: 10,
    boxShadow: "0 0 8px rgba(238, 102, 200, 0.43)",
  },
  cancelButton: {
    backgroundColor: COLORS.danger,
  },
  cancelButtonText: {
    color: COLORS.textWhite,
    fontSize: 12,
    fontFamily: FONTS.MERIENDA_MEDIUM,
    lineHeight: 20,
  },
  confirmButton: {
    backgroundColor: COLORS.secondary,
  },
  confirmButtonText: {
    color: COLORS.textWhite,
    fontSize: 12,
    fontFamily: FONTS.MERIENDA_MEDIUM,
    lineHeight: 20,
  },
});

export default ModalCustomStyles;

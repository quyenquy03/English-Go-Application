import FONTS from "@/constants/fonts";
import { StyleSheet } from "react-native";

const ModalConfirmSubmitStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageBox: {
    width: 100,
  },
  image: {
    width: 100,
    height: 145,
  },
  contentBox: {
    flex: 1,
    alignItems: "center",
  },
  titleBox: {},
  title: {
    fontSize: 16,
    fontFamily: FONTS.MERIENDA_BOLD,
    marginBottom: 15,
    lineHeight: 24,
    textAlign: "center",
  },
  descriptionBox: {},
  description: {
    fontSize: 13,
    fontFamily: FONTS.MERIENDA_REGULAR,
    lineHeight: 20,
    textAlign: "center",
  },
});
export default ModalConfirmSubmitStyles;

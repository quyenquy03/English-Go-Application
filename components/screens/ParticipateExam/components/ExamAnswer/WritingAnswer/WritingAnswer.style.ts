import COLORS from "@/constants/color";
import { StyleSheet } from "react-native";

const WritingAnswerStyles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  textBox: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: COLORS.backgroundPrimary,
    borderRadius: 5,
    minHeight: 200,
  },
});
export default WritingAnswerStyles;

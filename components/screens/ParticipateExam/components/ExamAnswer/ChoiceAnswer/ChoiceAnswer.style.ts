import COLORS from "@/constants/color";
import FONTS from "@/constants/fonts";
import { StyleSheet } from "react-native";

const ChoiceAnswerStyles = StyleSheet.create({
  container: {},
  choiceAnswerItem: {
    marginBottom: 15,
  },
  choiceAnswerItemQuestionBox: {},
  choiceAnswerItemQuestion: {
    fontFamily: FONTS.MERIENDA_REGULAR,
    textAlign: "justify",
  },
  choiceAnswerItemQuestionNumber: {
    fontFamily: FONTS.MERIENDA_BOLD,
    fontSize: 18,
    color: COLORS.primary,
  },
  choiceAnswerItemQuestionSpace: {
    width: 5,
  },
  choiceAnswerItemQuestionText: {
    fontSize: 13,
    lineHeight: 18,
  },
  choiceAnswerItemAnswerBox: {
    paddingLeft: 10,
  },
  answerItem: {},
});
export default ChoiceAnswerStyles;

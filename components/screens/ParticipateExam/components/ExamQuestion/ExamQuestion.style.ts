import COLORS from "@/constants/color";
import FONTS from "@/constants/fonts";
import { StyleSheet } from "react-native";

const ExamQuestionStyles = StyleSheet.create({
  container: {
    padding: 5,
  },
  questionTitleBox: {},
  questionOrderBox: {
    width: 10,
  },
  questionOrderText: {
    fontSize: 16,
    fontFamily: FONTS.MERIENDA_BLACK,
    marginRight: 5,
    paddingRight: 5,
    color: COLORS.primary,
  },
  questionTitleText: {
    fontSize: 14,
    fontFamily: FONTS.MERIENDA_BOLD,
    textAlign: "justify",
    lineHeight: 20,
  },
  questionContentBox: {
    marginTop: 10,
    padding: 5,
    backgroundColor: COLORS.backgroundPrimary,
    borderRadius: 5,
    boxShadow: "0 0 5px rgba(238, 102, 200, 0.43)",
  },
  questionDescriptionBox: {},
  questionDescriptionText: {
    fontSize: 12,
    fontFamily: FONTS.MERIENDA_BOLD,
    textAlign: "justify",
    lineHeight: 16,
  },
  questionContent: {},
  questionNoteBox: {},
  questionNoteText: {},
});
export default ExamQuestionStyles;

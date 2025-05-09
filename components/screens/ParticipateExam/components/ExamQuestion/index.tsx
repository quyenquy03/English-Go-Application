import FONTS from "@/constants/fonts";
import React from "react";
import { Text, View } from "react-native";
import RenderHtml, { MixedStyleDeclaration } from "react-native-render-html";
import ExamQuestionStyles from "./ExamQuestion.style";
const source = {
  html: `<p>   Now, let's listen to the example. On the recording, you might hear:</p><p>   \"Hello. This is the travel agency returning your call. You left a message about the holiday you've booked, asking which meals are included in the cost during your stay at Sunny Hotel. Lunch and dinner are free but if you wish to have breakfast in the hotel, you will need to pay an extra amount of money, depending on what you order. Let me know if I can help you with any other information. Goodbye.\"</p><p>   On the screen, you will read: Which meal is NOT included in the price of the holiday?</p><p>   *A. Breakfast</p><p>   B. Lunch</p><p>   C. Dinner</p><p>   D. All</p><p>   The correct answer is *A. Breakfast.</p>`,
};

const tagsStyles: Readonly<Record<string, MixedStyleDeclaration>> = {
  p: {
    fontSize: 12,
    fontFamily: FONTS.MERIENDA_MEDIUM,
    textAlign: "justify" as "justify",
    lineHeight: 18,
  },
};

const ExamQuestion = () => {
  return (
    <View style={ExamQuestionStyles.container}>
      <View style={ExamQuestionStyles.questionTitleBox}>
        <Text style={ExamQuestionStyles.questionTitleText}>
          <Text style={ExamQuestionStyles.questionOrderText}>Part 1:</Text>
          <View style={ExamQuestionStyles.questionOrderBox}></View>
          In this part, you will hear EIGHT short recordings. The recordings will be played ONCE only. There will be TWO questions
          for each recording. For each question, choose the correct answer A, B, C or D.
        </Text>
      </View>
      <View style={ExamQuestionStyles.questionContentBox}>
        <View style={ExamQuestionStyles.questionDescriptionBox}>
          <Text style={ExamQuestionStyles.questionDescriptionText}>
            Ever wondered what it feels like to have a different job? Here, four people with very different careers reveal the
            trade secrets of their working day.
          </Text>
        </View>
        <View style={ExamQuestionStyles.questionContent}>
          <RenderHtml
            systemFonts={[FONTS.MERIENDA_MEDIUM]}
            tagsStyles={tagsStyles}
            contentWidth={200}
            source={source}
            enableExperimentalMarginCollapsing={true}
          />
        </View>
      </View>
    </View>
  );
};

export default ExamQuestion;

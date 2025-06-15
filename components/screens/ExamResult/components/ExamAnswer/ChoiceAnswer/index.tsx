import React, { useEffect } from "react";
import { View } from "react-native";
import ChoiceAnswerStyles from "./ChoiceAnswer.style";
import ChoiceAnswerItem from "./ChoiceAnswerItem";
import { RootState } from "@/stores";
import { useDispatch, useSelector } from "react-redux";
import { ExamActions } from "@/stores/examStore/examReducer";
import RadioCustom from "@/components/ui/Radio";
import { Text } from "react-native";
import { IExamQuestion } from "@/types/exam/ExamTypes";

const ChoiceAnswer = () => {
  const { selectedQuestion } = useSelector(
    (state: RootState) => state.examStore
  );
  return (
    <View style={ChoiceAnswerStyles.container}>
      {selectedQuestion?.subQuestions?.map((subQuestion, index) => (
        <View key={subQuestion.id} style={ChoiceAnswerStyles.choiceAnswerItem}>
          <View style={ChoiceAnswerStyles.choiceAnswerItemQuestionBox}>
            <Text style={ChoiceAnswerStyles.choiceAnswerItemQuestion}>
              <Text style={ChoiceAnswerStyles.choiceAnswerItemQuestionNumber}>
                {index + 1}.
              </Text>
              <View
                style={ChoiceAnswerStyles.choiceAnswerItemQuestionSpace}
              ></View>
              <Text style={ChoiceAnswerStyles.choiceAnswerItemQuestionText}>
                {subQuestion?.content ||
                  "Question content not available. Please check the question."}
              </Text>
            </Text>
          </View>
          <View style={ChoiceAnswerStyles.choiceAnswerItemAnswerBox}>
            {subQuestion?.answers?.map((answer, answerIndex) => (
              <RadioCustom
                key={answer.id}
                title={answer.answerContent}
                checked={subQuestion.selectedAnswerId === answer.id}
              />
            ))}
          </View>
        </View>
      ))}
    </View>
  );
};

export default ChoiceAnswer;

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
  const {
    selectedQuestion,
    listQuestionOfSkill,
    targetQuestionOfSkill,
    currentTargetQuestion,
  } = useSelector((state: RootState) => state.examStore);
  const dispatch = useDispatch();
  const handleChangeAnswer = (answerId: string, subquestionId: string) => {
    if (!selectedQuestion) return;
    const question: IExamQuestion = {
      ...selectedQuestion,
      subQuestions: selectedQuestion?.subQuestions?.map((subQuestion) => {
        if (subQuestion.id === subquestionId) {
          return {
            ...subQuestion,
            selectedAnswerId: answerId,
          };
        }
        return subQuestion;
      }),
    };
    const newListQuestion = listQuestionOfSkill?.map((q) => {
      if (question.id === q.id) {
        return question;
      }
      return q;
    });
    const targetQuestions = targetQuestionOfSkill.map((target) => {
      if (target.questionId === subquestionId) {
        return {
          ...target,
          isDone: true,
        };
      }
      return target;
    });
    dispatch(ExamActions.changeSelectedQuestion(question));
    dispatch(ExamActions.changeListQuestionOfSkill(newListQuestion));
    dispatch(ExamActions.changeTargetQuestionOfSkill(targetQuestions));
  };
  // useEffect(() => {
  //   if (currentTargetQuestion) {
  //     // scroll to current target question
  //     const element = document.getElementById(
  //       `sub-question-${currentTargetQuestion.questionId}`
  //     );
  //     if (element) {
  //       element.scrollIntoView({ behavior: "smooth" });
  //     }
  //   }
  // }, [currentTargetQuestion, selectedQuestion?.levelId]);
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
                onChecked={() => handleChangeAnswer(answer.id, subQuestion.id)}
              />
            ))}
          </View>
        </View>
      ))}
    </View>
  );
};

export default ChoiceAnswer;

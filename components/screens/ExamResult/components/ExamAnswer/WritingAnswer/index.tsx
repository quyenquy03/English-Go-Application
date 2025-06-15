import React, { useEffect } from "react";
import { View } from "react-native";
import WritingAnswerStyles from "./WritingAnswer.style";
import { TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/stores";
import { ExamActions } from "@/stores/examStore/examReducer";

const WritingAnswer = () => {
  const [writingAnswer, setWritingAnswer] = React.useState<string>("");
  const { selectedQuestion, listQuestionOfSkill } = useSelector(
    (state: RootState) => state.examStore
  );
  const dispatch = useDispatch();
  const handleChange = (value: string) => {
    const newSelectedQuestion = {
      ...selectedQuestion,
      questionData: value,
    };
    const newListQuestionOfSkill = listQuestionOfSkill?.map((question) =>
      question.id === newSelectedQuestion.id ? newSelectedQuestion : question
    );
    dispatch(ExamActions.changeSelectedQuestion(newSelectedQuestion));
    dispatch(ExamActions.changeListQuestionOfSkill(newListQuestionOfSkill));
  };

  useEffect(() => {
    setWritingAnswer(selectedQuestion?.questionData || "");
  }, [selectedQuestion?.id]);
  return (
    <View style={WritingAnswerStyles.container}>
      <View style={WritingAnswerStyles.textBox}>
        <TextInput
          placeholder="Enter your answer here!"
          multiline
          disableFullscreenUI
          value={writingAnswer}
          onChangeText={setWritingAnswer}
          style={WritingAnswerStyles.textInput}
          onBlur={() => handleChange(writingAnswer)}
        />
      </View>
    </View>
  );
};

export default WritingAnswer;

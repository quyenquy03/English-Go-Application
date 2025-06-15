import React from "react";
import { View } from "react-native";
import ChoiceAnswer from "./ChoiceAnswer";
import ExamAnswerStyles from "./ExamAnswer.style";
import SpeakingAnswer from "./SpeakingAnswer";
import WritingAnswer from "./WritingAnswer";
import { useSelector } from "react-redux";
import { RootState } from "@/stores";

const ExamAnswer = () => {
  const { selectedQuestion } = useSelector(
    (state: RootState) => state.examStore
  );
  return (
    <View style={ExamAnswerStyles.container}>
      {(selectedQuestion?.skill?.id === "listening" ||
        selectedQuestion?.skill?.id === "reading") && <ChoiceAnswer />}
      {selectedQuestion?.skill?.id === "writing" && <WritingAnswer />}
      {selectedQuestion?.skill?.id === "speaking" && <SpeakingAnswer />}
    </View>
  );
};

export default ExamAnswer;

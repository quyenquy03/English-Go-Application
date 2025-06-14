import React from "react";
import { View } from "react-native";
import ChoiceAnswer from "./ChoiceAnswer";
import ExamAnswerStyles from "./ExamAnswer.style";
import SpeakingAnswer from "./SpeakingAnswer";
import WritingAnswer from "./WritingAnswer";

const ExamAnswer = () => {
  const type: string = "listening"; // This should be replaced with the actual type from your state or props
  return (
    <View style={ExamAnswerStyles.container}>
      {(type === "listening" || type === "reading") && <ChoiceAnswer />}
      {type === "writing" && <WritingAnswer />}
      {type === "speaking" && <SpeakingAnswer />}
    </View>
  );
};

export default ExamAnswer;

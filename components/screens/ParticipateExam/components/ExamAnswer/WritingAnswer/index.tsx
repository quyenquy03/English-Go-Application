import React from "react";
import { View } from "react-native";
import WritingAnswerStyles from "./WritingAnswer.style";

const WritingAnswer = () => {
  return (
    <View style={WritingAnswerStyles.container}>
      <View style={WritingAnswerStyles.textBox}></View>
    </View>
  );
};

export default WritingAnswer;

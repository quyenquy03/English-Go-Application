import React from "react";
import { View } from "react-native";
import ChoiceAnswerStyles from "./ChoiceAnswer.style";
import ChoiceAnswerItem from "./ChoiceAnswerItem";

const ChoiceAnswer = () => {
  return (
    <View style={ChoiceAnswerStyles.container}>
      {Array.from({ length: 10 }).map((_, index) => (
        <ChoiceAnswerItem key={index} />
      ))}
    </View>
  );
};

export default ChoiceAnswer;

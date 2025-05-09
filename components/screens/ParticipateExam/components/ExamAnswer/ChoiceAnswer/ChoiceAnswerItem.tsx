import RadioCustom from "@/components/ui/Radio";
import React from "react";
import { Text, View } from "react-native";
import ChoiceAnswerStyles from "./ChoiceAnswer.style";

const ChoiceAnswerItem = () => {
  return (
    <View style={ChoiceAnswerStyles.choiceAnswerItem}>
      <View style={ChoiceAnswerStyles.choiceAnswerItemQuestionBox}>
        <Text style={ChoiceAnswerStyles.choiceAnswerItemQuestion}>
          <Text style={ChoiceAnswerStyles.choiceAnswerItemQuestionNumber}>1.</Text>
          <View style={ChoiceAnswerStyles.choiceAnswerItemQuestionSpace}></View>
          <Text style={ChoiceAnswerStyles.choiceAnswerItemQuestionText}>
            What is your name What is your name What is your name What is your name What is your name What is your name What is
            your name?
          </Text>
        </Text>
      </View>
      <View style={ChoiceAnswerStyles.choiceAnswerItemAnswerBox}>
        <RadioCustom title='abcd abd kja ia ia aj idj as io iud jaoi joia oiaj jhua oid ioa jud pap cv ji cv nad' checked />
        <RadioCustom title='pap cv ji cv nad' />
        <RadioCustom title='abcd abd kja pap cv ji cv nad' />
        <RadioCustom title='abcd abd kja ia ia aj idj as cv nad' />
      </View>
    </View>
  );
};

export default ChoiceAnswerItem;

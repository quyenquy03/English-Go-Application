import React, { useEffect } from "react";
import { Pressable, Text, View } from "react-native";
import FooterStyles from "./Footer.style";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/stores";
import { ExamActions } from "@/stores/examStore/examReducer";

const Footer = () => {
  const {
    listLevelOfSkill,
    listQuestionOfSkill,
    selectedSkill,
    selectedLevel,
    openModalSubmitSkill,
    targetQuestionOfSkill,
    currentExam,
  } = useSelector((state: RootState) => state.examStore);
  const dispatch: AppDispatch = useDispatch();
  const handleChangeSelectedLevel = (levelId: string) => {
    if (selectedSkill?.skillId === "speaking") return;
    dispatch(ExamActions.changeSelectedLevel(levelId));
  };
  useEffect(() => {
    const question = listQuestionOfSkill?.find(
      (question) =>
        question.levelId === selectedLevel &&
        question.skill?.id === selectedSkill?.skillId
    );
    if (question) {
      dispatch(ExamActions.changeSelectedQuestion(question));
    }
  }, [dispatch, listQuestionOfSkill, selectedLevel, selectedSkill]);
  return (
    <View style={FooterStyles.container}>
      {listLevelOfSkill && listLevelOfSkill?.length > 0
        ? listLevelOfSkill?.map((level, index) => (
            <Pressable
              onPress={() => handleChangeSelectedLevel(level.id)}
              key={index}
              style={[
                FooterStyles.button,
                selectedLevel === level.id && FooterStyles.selectedButton,
              ]}
            >
              <Text
                style={[
                  FooterStyles.buttonText,
                  selectedLevel === level.id && FooterStyles.selectedButtonText,
                ]}
              >
                {level.displayName}
              </Text>
            </Pressable>
          ))
        : null}
    </View>
  );
};

export default Footer;

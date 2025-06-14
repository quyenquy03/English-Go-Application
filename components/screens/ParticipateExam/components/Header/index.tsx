import DrawerCustom from "@/components/ui/DrawerCustom";
import COLORS from "@/constants/color";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { Pressable, Text, View } from "react-native";
import HeaderStyles from "./Header.style";
import TimeCountdown from "./TimeCountdown";
import { ISkill } from "@/types/skill/SkillType";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/stores";
import { ITargetQuestionOfSkill } from "@/types/exam/ExamTypes";
import { ExamActions } from "@/stores/examStore/examReducer";
const Header = () => {
  const dispatch = useDispatch();
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [selectedSkillInfo, setSelectedSkillInfo] = React.useState<
    ISkill | undefined
  >(undefined);
  const [timeCountDown, setTimeCountDown] = React.useState<number | undefined>(
    undefined
  );
  const { listSkill } = useSelector((state: RootState) => state.skillStore);

  const { selectedSkill, targetQuestionOfSkill } = useSelector(
    (state: RootState) => state.examStore
  );

  const handleChangeTargetQuestion = (question: ITargetQuestionOfSkill) => {
    dispatch(ExamActions.changeCurrentTargetQuestion(question));
    if (selectedSkill?.skillId === "speaking") return;
    dispatch(ExamActions.changeSelectedLevel(question.levelId));
  };

  const handleOpenModalSubmitSkill = () => {
    dispatch(ExamActions.changeOpenModalSubmitSkill(true));
  };

  React.useEffect(() => {
    if (listSkill && selectedSkill) {
      setSelectedSkillInfo(
        listSkill.find((skill) => skill.id === selectedSkill.skillId)
      );
    }
  }, [listSkill, selectedSkill]);
  React.useEffect(() => {
    if (selectedSkill?.startTime && selectedSkill.skill.expiredTime) {
      setTimeCountDown(
        Math.floor(
          Number(selectedSkill?.skill.expiredTime) * 60 -
            (new Date().getTime() - Number(selectedSkill?.startTime)) / 1000
        )
      );
    }
  }, [selectedSkill]);
  return (
    <View style={HeaderStyles.container}>
      <View style={HeaderStyles.headerBox}>
        <Pressable
          onPress={() => setIsDrawerOpen(!isDrawerOpen)}
          style={HeaderStyles.menuIcon}
        >
          <FontAwesome name="bars" size={20} color={COLORS.secondary} />
        </Pressable>
        <View style={HeaderStyles.titleBox}>
          <Text style={HeaderStyles.title}>
            {selectedSkillInfo?.displayName}
          </Text>
          <TimeCountdown
            initTime={timeCountDown}
            handleSubmit={() => console.log("submit")}
          />
        </View>
        <Pressable
          onPress={handleOpenModalSubmitSkill}
          style={HeaderStyles.menuIcon}
        >
          <FontAwesome name="check" size={20} color={COLORS.secondary} />
        </Pressable>
      </View>
      <DrawerCustom
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <View style={HeaderStyles.drawerBox}>
          <View style={HeaderStyles.questionBox}>
            {targetQuestionOfSkill.map((questionItem, index) => (
              <Pressable
                onPress={() => handleChangeTargetQuestion(questionItem)}
                key={index}
                style={[
                  HeaderStyles.questionItem,
                  questionItem.isDone && HeaderStyles.questionItemActive,
                ]}
              >
                <Text
                  style={[
                    HeaderStyles.questionItemText,
                    questionItem.isDone && HeaderStyles.questionItemTextActive,
                  ]}
                >
                  {index + 1}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>
      </DrawerCustom>
    </View>
  );
};

export default Header;

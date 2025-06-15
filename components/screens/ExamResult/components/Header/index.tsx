import DrawerCustom from "@/components/ui/DrawerCustom";
import COLORS from "@/constants/color";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { Pressable, Text, View } from "react-native";
import HeaderStyles from "./Header.style";
import { ISkill } from "@/types/skill/SkillType";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/stores";
import { ITargetQuestionOfSkill } from "@/types/exam/ExamTypes";
import { ExamActions } from "@/stores/examStore/examReducer";
import { useRouter } from "expo-router";

const skills = ["listening", "reading", "writing", "speaking"];

const Header = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [selectedSkillInfo, setSelectedSkillInfo] = React.useState<
    ISkill | undefined
  >(undefined);
  const [timeCountDown, setTimeCountDown] = React.useState<number | undefined>(
    undefined
  );
  const { listSkill } = useSelector((state: RootState) => state.skillStore);

  const { selectedSkill, targetQuestionOfSkill, currentExam } = useSelector(
    (state: RootState) => state.examStore
  );

  const handleChangeSelectedSkill = (action: "previous" | "next") => {
    const currentIndex = skills.findIndex(
      (skill) => skill === selectedSkill?.skillId
    );
    let nextIndex = action === "next" ? currentIndex + 1 : currentIndex - 1;
    if (nextIndex < 0) nextIndex = skills.length - 1;
    if (nextIndex >= skills.length) nextIndex = 0;
    const nextSkill = skills[nextIndex];
    console.log("nextSkill", nextSkill);
    if (nextSkill) {
      router.push(`/exam/result-exam/${currentExam?.id}?skill=${nextSkill}`);
    }
  };

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
          <Pressable
            onPress={() => handleChangeSelectedSkill("previous")}
            style={HeaderStyles.iconBox}
          >
            <FontAwesome name="angle-left" size={30} color="white" />
          </Pressable>
          <Text style={HeaderStyles.title}>
            {selectedSkillInfo?.displayName}
          </Text>
          <Pressable
            onPress={() => handleChangeSelectedSkill("next")}
            style={HeaderStyles.iconBox}
          >
            <FontAwesome name="angle-right" size={30} color="white" />
          </Pressable>
        </View>
        <Pressable
          onPress={handleOpenModalSubmitSkill}
          style={HeaderStyles.menuIcon}
        >
          <FontAwesome name="close" size={20} color={COLORS.secondary} />
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

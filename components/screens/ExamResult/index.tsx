import { useFocusEffect } from "@react-navigation/native";
import { useRouter } from "expo-router";
import React, { useCallback, useEffect } from "react";
import { Alert, BackHandler, Linking, ScrollView, View } from "react-native";
import ParticipateExamStyles from "./ParticipateExam.style";
import ExamAnswer from "./components/ExamAnswer";
import ExamQuestion from "./components/ExamQuestion";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ModalConfirmSubmit from "./components/ModalConfirmSubmit";
import { SkillActions } from "@/stores/skillStore/skillReducer";
import { ExamActions } from "@/stores/examStore/examReducer";
import { AppDispatch, RootState } from "@/stores";
import { useDispatch, useSelector } from "react-redux";
import Toast from "react-native-toast-message";
import { LevelActions } from "@/stores/levelStore/levelReducer";

type ExamResultScreenProps = {
  examId?: string;
};
const ExamResultScreen = ({ examId }: ExamResultScreenProps) => {
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();
  const { listSkill } = useSelector((state: RootState) => state.skillStore);
  const { listLevel } = useSelector((state: RootState) => state.levelStore);
  const { selectedLevel, currentSkill } = useSelector(
    (state: RootState) => state.examStore
  );
  const [skill, setSkill] = React.useState<string | null>(null);
  console.log("skill", skill);

  useEffect(() => {
    const checkURL = async () => {
      const url = await Linking.getInitialURL();
      if (url) {
        const queryString = url.split("?")[1];
        const queryParams = new URLSearchParams(queryString);
        const skillId = queryParams.get("skill");
        setSkill(skillId ?? "listening");
      }
    };
    checkURL();
  }, []);
  useEffect(() => {
    dispatch(SkillActions.getAllSkills());
    dispatch(LevelActions.getAllLevels());
    if (!examId) {
      Toast.show({
        type: "error",
        text1: "Lỗi",
        text2: "Không tìm thấy mã bài thi.",
      });
      router.replace("/history");
      return;
    }
  }, []);
  useEffect(() => {
    const getLevelOfSkill = (skillId: string) => {
      const levelOfSkill = listLevel?.filter(
        (level) => level.skillId === skillId
      );
      dispatch(ExamActions.changeListLevelOfSkill(levelOfSkill));
      if (
        !selectedLevel ||
        !levelOfSkill?.find((level) => level.id === selectedLevel)
      ) {
        dispatch(ExamActions.changeSelectedLevel(levelOfSkill?.[0]?.id));
      }
    };
    if (skill && listSkill.length > 0) {
      dispatch(ExamActions.changeCurrentSkill(skill));
      getLevelOfSkill(skill);
    }
  }, [skill, listSkill.length, listLevel, dispatch, selectedLevel]);
  useEffect(() => {
    if (!examId || !currentSkill) {
      return;
    }
    dispatch(
      ExamActions.getResultOfExam({
        examId,
        skillId: currentSkill,
      })
    );
  }, [currentSkill, dispatch, examId]);
  return (
    <View style={ParticipateExamStyles.container}>
      <View style={ParticipateExamStyles.header}>
        <Header />
      </View>
      <ScrollView style={ParticipateExamStyles.body}>
        <ExamQuestion />
        <ExamAnswer />
      </ScrollView>
      <View style={ParticipateExamStyles.footer}>
        <Footer />
        <ModalConfirmSubmit />
      </View>
    </View>
  );
};

export default ExamResultScreen;

import { useFocusEffect } from "@react-navigation/native";
import { useRouter } from "expo-router";
import React, { useCallback, useEffect } from "react";
import { Alert, BackHandler, ScrollView, View } from "react-native";
import ParticipateExamStyles from "./ParticipateExam.style";
import ExamAnswer from "./components/ExamAnswer";
import ExamQuestion from "./components/ExamQuestion";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ModalConfirmSubmit from "./components/ModalConfirmSubmit";
import { SkillActions } from "@/stores/skillStore/skillReducer";
import { ExamActions } from "@/stores/examStore/examReducer";
import { AppDispatch } from "@/stores";
import { useDispatch } from "react-redux";
import Toast from "react-native-toast-message";
const ParticipateExamScreen = () => {
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        Alert.alert("Xác nhận", "Bạn có chắc chắn muốn thoát khỏi bài thi?", [
          { text: "Hủy", style: "cancel" },
          { text: "Thoát", onPress: () => router.replace("/practice") },
        ]);
        return true;
      };

      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        onBackPress
      );

      return () => backHandler.remove();
    }, [])
  );
  useEffect(() => {
    dispatch(SkillActions.getAllSkills());
    dispatch(ExamActions.continueExam()).then((res: any) => {
      if (!res.payload.success) {
        Toast.show({
          type: "error",
          text1: "Tham gia thi thất bại",
          text2: res.payload.message || "Vui lòng thử lại sau.",
        });
        router.push("/practice");
        return;
      }
    });
  }, []);
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

export default ParticipateExamScreen;

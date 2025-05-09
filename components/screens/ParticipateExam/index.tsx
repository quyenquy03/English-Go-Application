import { useFocusEffect } from "@react-navigation/native";
import { useRouter } from "expo-router";
import React, { useCallback } from "react";
import { Alert, BackHandler, ScrollView, View } from "react-native";
import ParticipateExamStyles from "./ParticipateExam.style";
import ExamAnswer from "./components/ExamAnswer";
import ExamQuestion from "./components/ExamQuestion";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ModalConfirmSubmit from "./components/ModalConfirmSubmit";
const ParticipateExamScreen = () => {
  const router = useRouter();
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        Alert.alert("Xác nhận", "Bạn có chắc chắn muốn thoát khỏi bài thi?", [
          { text: "Hủy", style: "cancel" },
          { text: "Thoát", onPress: () => router.back() },
        ]);
        return true;
      };

      BackHandler.addEventListener("hardwareBackPress", onBackPress);

      return () => BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, [])
  );
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

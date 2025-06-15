import ExamResultScreen from "@/components/screens/ExamResult";
import { useRoute } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";

const ResultExam = () => {
  const route = useRoute();
  const { examId } = route.params as { examId: string };
  return <ExamResultScreen examId={examId} />;
};

export default ResultExam;

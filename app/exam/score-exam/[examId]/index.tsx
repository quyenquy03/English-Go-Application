import ExamScore from "@/components/screens/ExamScore";
import { useRoute } from "@react-navigation/native";
import React from "react";

const ScoreExam = () => {
  const route = useRoute();
  const { examId } = route.params as { examId: string };
  return <ExamScore examId={examId} />;
};

export default ScoreExam;

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/stores";
import { ExamActions } from "@/stores/examStore/examReducer";
import { IExamSkillStatus } from "@/types/exam/ExamTypes";
import MainLayout from "@/components/layouts/MainLayout";
import FONTS from "@/constants/fonts";
import COLORS from "@/constants/color";
import ExamScoreStyle from "./ExamScore.style";
import { useRouter } from "expo-router";

type ExamScoreProps = {
  examId?: string;
};

interface IScoreOfSkill {
  score: number;
  totalQuestion: number;
}
interface IScoreOfExam {
  listening: IScoreOfSkill;
  reading: IScoreOfSkill;
  writing: IScoreOfSkill;
  speaking: IScoreOfSkill;
}

const ExamScore = ({ examId }: ExamScoreProps) => {
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();
  const [examScore, setExamScore] = useState<IScoreOfExam | null>(null);
  const { currentExamScore } = useSelector(
    (state: RootState) => state.examStore
  );
  const handleGoToReviewExamPage = () => {
    if (!examId) {
      Alert.alert("Lỗi", "Không tìm thấy mã bài thi");
      return;
    }
    router.push(`/exam/result-exam/${examId}`);
  };
  const handleBackToExamHistory = () => {
    router.replace("/history");
  };
  useEffect(() => {
    if (!examId) {
      Alert.alert("Lỗi", "Không tìm thấy mã bài thi");
      return;
    }
    const getScoreOfExam = async () => {
      dispatch(ExamActions.getExamScore(examId)).then((res: any) => {
        if (res.payload.success) {
          const scoreData = res?.payload?.data?.examSkillStatuses;
          const scoreOfExam: IScoreOfExam = {
            listening: { score: 0, totalQuestion: 0 },
            reading: { score: 0, totalQuestion: 0 },
            writing: { score: 0, totalQuestion: 0 },
            speaking: { score: 0, totalQuestion: 0 },
          };
          scoreData?.forEach((skill: IExamSkillStatus) => {
            const scoreOfSkill: IScoreOfSkill = {
              score: skill.score ?? 0,
              totalQuestion: skill.totalQuestion ?? 0,
            };
            scoreOfExam[skill?.skillId as keyof IScoreOfExam] = scoreOfSkill;
          });
          setExamScore(scoreOfExam);
        }
      });
    };
    getScoreOfExam();
  }, [dispatch, examId]);

  return (
    <MainLayout>
      <ScrollView contentContainerStyle={ExamScoreStyle.container}>
        <Text style={ExamScoreStyle.title}>Thông tin bài thi</Text>

        <View style={ExamScoreStyle.item}>
          <Text style={ExamScoreStyle.label}>Mã lượt thi:</Text>
          <Text style={ExamScoreStyle.value}>{currentExamScore?.examCode}</Text>
        </View>

        <View style={ExamScoreStyle.item}>
          <Text style={ExamScoreStyle.label}>Điểm bài nghe:</Text>
          <Text style={ExamScoreStyle.value}>
            {examScore?.listening.score} / {examScore?.listening.totalQuestion}
          </Text>
        </View>

        <View style={ExamScoreStyle.item}>
          <Text style={ExamScoreStyle.label}>Điểm bài đọc:</Text>
          <Text style={ExamScoreStyle.value}>
            {examScore?.reading.score} / {examScore?.reading.totalQuestion}
          </Text>
        </View>

        <View style={ExamScoreStyle.item}>
          <Text style={ExamScoreStyle.label}>Điểm bài viết:</Text>
          <Text style={ExamScoreStyle.value}>Chưa chấm</Text>
        </View>

        <View style={ExamScoreStyle.item}>
          <Text style={ExamScoreStyle.label}>Điểm bài nói:</Text>
          <Text style={ExamScoreStyle.value}>Chưa chấm</Text>
        </View>

        <View style={ExamScoreStyle.item}>
          <Text style={ExamScoreStyle.label}>Điểm bài thi:</Text>
          <Text style={ExamScoreStyle.value}>Chưa xác định</Text>
        </View>

        <View style={ExamScoreStyle.buttonGroup}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={handleBackToExamHistory}
            style={ExamScoreStyle.backButton}
          >
            <Text style={ExamScoreStyle.backButtonText}>Quay lại</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={handleGoToReviewExamPage}
            style={ExamScoreStyle.viewButton}
          >
            <Text style={ExamScoreStyle.viewButtonText}>Xem lại bài thi</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </MainLayout>
  );
};

export default ExamScore;

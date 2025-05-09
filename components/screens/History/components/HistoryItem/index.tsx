import COLORS from "@/constants/color";
import roundToHalfOrZero from "@/helpers/functions/RoundPointToHalfOrZero";
import { IExamScore } from "@/types/exam/ExamTypes";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import React, { useMemo } from "react";
import { Pressable, Text, View } from "react-native";
import HistoryItemStyles from "./HistoryItem.style";
import { useRouter } from "expo-router";
interface HistoryItemProps {
  order?: number;
  exam?: IExamScore;
}
const HistoryItem = ({ order = 1, exam }: HistoryItemProps) => {
  const listeningSkill = useMemo(() => exam?.examSkillStatuses?.find((item) => item.skillId === "listening"), [exam?.id]);
  const readingSkill = useMemo(() => exam?.examSkillStatuses?.find((item) => item.skillId === "reading"), [exam?.id]);
  const listeningScore = useMemo(
    () => (10 / (listeningSkill?.totalQuestion ?? 1)) * (listeningSkill?.score ?? 0),
    [listeningSkill?.score, listeningSkill?.totalQuestion]
  );
  const readingScore = useMemo(
    () => (10 / (readingSkill?.totalQuestion ?? 1)) * (readingSkill?.score ?? 0),
    [readingSkill?.score, readingSkill?.totalQuestion]
  );
    const router = useRouter();
  
  return (
    <View style={HistoryItemStyles.container}>
      <View style={HistoryItemStyles.headerBox}>
        <View style={HistoryItemStyles.orderBox}>
          <Text style={HistoryItemStyles.orderText}>{order}</Text>
        </View>
        <Text style={HistoryItemStyles.headerText}>{exam?.examCode}</Text>
        <View style={HistoryItemStyles.buttonShow}>
          <FontAwesome5 name='eye' size={15} color={COLORS.textWhite} />
        </View>
      </View>
      <View style={HistoryItemStyles.bodyBox}>
        <View style={HistoryItemStyles.bodyRow}>
          <View style={HistoryItemStyles.bodyColumn}>
            <Text style={HistoryItemStyles.bodyColumnText}>Kĩ năng nghe</Text>
          </View>
          <View style={HistoryItemStyles.bodyColumn}>
            <Text style={HistoryItemStyles.bodyColumnText}>
              {listeningSkill?.score} / {listeningSkill?.totalQuestion} câu
            </Text>
          </View>
          <View style={HistoryItemStyles.bodyColumn}>
            <Text style={HistoryItemStyles.bodyColumnText}>{roundToHalfOrZero(listeningScore)}/10 điểm</Text>
          </View>
        </View>
        <View style={HistoryItemStyles.bodyRow}>
          <View style={HistoryItemStyles.bodyColumn}>
            <Text style={HistoryItemStyles.bodyColumnText}>Kĩ năng đọc</Text>
          </View>
          <View style={HistoryItemStyles.bodyColumn}>
            <Text style={HistoryItemStyles.bodyColumnText}>
              {readingSkill?.score} / {readingSkill?.totalQuestion} câu
            </Text>
          </View>
          <View style={HistoryItemStyles.bodyColumn}>
            <Text style={HistoryItemStyles.bodyColumnText}>{roundToHalfOrZero(readingScore)}/10 điểm</Text>
          </View>
        </View>
        <View style={HistoryItemStyles.bodyRow}>
          <View style={HistoryItemStyles.bodyColumn}>
            <Text style={HistoryItemStyles.bodyColumnText}>Kĩ năng viết</Text>
          </View>
          <View style={HistoryItemStyles.bodyColumn}>
            <Text style={HistoryItemStyles.bodyColumnText}>Chưa chấm điểm</Text>
          </View>
          <View style={HistoryItemStyles.bodyColumn}>
            <Pressable onPress={() => router.navigate('/(tabs)/history/grading')} style={HistoryItemStyles.bodyColumnButton}>
              <Text style={HistoryItemStyles.bodyButtonText}>Đăng ký chấm</Text>
            </Pressable>
          </View>
        </View>
        <View style={HistoryItemStyles.bodyRow}>
          <View style={HistoryItemStyles.bodyColumn}>
            <Text style={HistoryItemStyles.bodyColumnText}>Kĩ năng nói</Text>
          </View>
          <View style={HistoryItemStyles.bodyColumn}>
            <Text style={HistoryItemStyles.bodyColumnText}>Chưa chấm điểm</Text>
          </View>
          <View style={HistoryItemStyles.bodyColumn}>
            <Pressable style={HistoryItemStyles.bodyColumnButton}>
              <Text style={HistoryItemStyles.bodyButtonText}>Đăng ký chấm</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HistoryItem;

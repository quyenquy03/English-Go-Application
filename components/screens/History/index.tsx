import HeaderTextBox from "@/components/ui/HeaderTextBox";
import { AppDispatch, RootState } from "@/stores";
import { ExamActions } from "@/stores/examStore/examReducer";
import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import HistoryStyles from "./History.style";
import HistoryItem from "./components/HistoryItem";

const HistoryScreen = () => {
  const dispatch: AppDispatch = useDispatch();
  const { listMyExam, isLoading } = useSelector((state: RootState) => state.examStore);
  useEffect(() => {
    dispatch(ExamActions.getMyExams());
  }, [dispatch]);
  return (
    <View style={HistoryStyles.container}>
      <HeaderTextBox
        titleText={"Lịch sử luyện thi"}
        descriptionText={
          <Text style={HistoryStyles.descriptionText}>
            Chào mừng bạn đã quay trở lại! {"\n"}Hãy cùng nhau xem lại lịch sử luyện thi của bạn nào.
          </Text>
        }
      />
      {/* <GeneralInfomationBox /> */}
      <View style={HistoryStyles.historyList}>
        {listMyExam?.map((myExam, index) => (
          <HistoryItem exam={myExam} order={index + 1} key={myExam.id} />
        ))}
      </View>
    </View>
  );
};

export default HistoryScreen;

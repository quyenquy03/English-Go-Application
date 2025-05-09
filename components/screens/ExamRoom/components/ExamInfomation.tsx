import React from "react";
import { ScrollView, Text, View } from "react-native";
import ExamRoomStyles from "../ExamRoom.style";

const ExamInfomation = () => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      style={ExamRoomStyles.tabItemContainer}
    >
      <View style={ExamRoomStyles.tabItemHeader}>
        <View style={ExamRoomStyles.tabItemOrder}>
          <Text style={ExamRoomStyles.tabItemOrderText}>2</Text>
        </View>
        <Text style={ExamRoomStyles.tabItemHeaderText}>Thông tin bài thi</Text>

        {/* NHIỆM VỤ 2: Design giao diện cho tab thông tin bài thi */}
      </View>
    </ScrollView>
  );
};

export default ExamInfomation;

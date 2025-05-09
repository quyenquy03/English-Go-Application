import React from "react";
import { ScrollView, Text, View } from "react-native";
import ExamRoomStyles from "../ExamRoom.style";

const ContestantInfomation = () => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      style={ExamRoomStyles.tabItemContainer}
    >
      <View style={ExamRoomStyles.tabItemHeader}>
        <View style={ExamRoomStyles.tabItemOrder}>
          <Text style={ExamRoomStyles.tabItemOrderText}>3</Text>
        </View>
        <Text style={ExamRoomStyles.tabItemHeaderText}>Thông tin thí sinh</Text>

        {/* NHIỆM VỤ 2: Design giao diện cho tab thông tin thí sinh */}
      </View>
    </ScrollView>
  );
};

export default ContestantInfomation;

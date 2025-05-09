import React from "react";
import { ScrollView, Text, View } from "react-native";
import ExamRoomStyles from "../ExamRoom.style";

const DeviceInfomation = () => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      style={ExamRoomStyles.tabItemContainer}
    >
      <View style={ExamRoomStyles.tabItemHeader}>
        <View style={ExamRoomStyles.tabItemOrder}>
          <Text style={ExamRoomStyles.tabItemOrderText}>1</Text>
        </View>
        <Text style={ExamRoomStyles.tabItemHeaderText}>Kiểm tra thiết bị</Text>

        {/* NHIỆM VỤ 2: Design giao diện cho tab kiểm tra thiết bị */}
      </View>
    </ScrollView>
  );
};

export default DeviceInfomation;

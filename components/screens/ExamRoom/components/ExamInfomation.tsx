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
      </View>

      {/* NHIỆM VỤ 2: Design giao diện cho tab thông tin bài thi */}
      <View style={ExamRoomStyles.instructions}>
        <Text style={ExamRoomStyles.highlight}>Phần 1: Cấu trúc bài thi</Text>
        <Text style={ExamRoomStyles.instruction}>
          {"- Kĩ năng 1: LISTENING \n (3 phần - 35 câu hỏi ~ 47 phút)"}
        </Text>
        <Text style={ExamRoomStyles.instruction}>
          {"- Kĩ năng 2: READING \n (4 phần - 40 câu hỏi ~ 60 phút)"}
        </Text>
        <Text style={ExamRoomStyles.instruction}>
          {"- Kĩ năng 3: WRITING \n (2 phần - 2 bài viết ~ 60 phút)"}
        </Text>
        <Text style={ExamRoomStyles.instruction}>
          {"- Kĩ năng 4: SPEAKING \n (3 phần - 3 bài nói ~ 12 phút)"}
        </Text>
      </View>

      {/* Phần 2: Lưu ý khi làm bài */}
      <View style={ExamRoomStyles.instructions}>
        <Text style={ExamRoomStyles.highlight}>Phần 2: Lưu ý khi làm bài</Text>
        <Text style={ExamRoomStyles.instruction}>
          - Khi hết thời gian của từng Kĩ năng, hệ thống sẽ tự động chuyển qua
          kĩ năng tiếp theo
        </Text>
        <Text style={ExamRoomStyles.instruction}>
          - Thí sinh không thể thao tác với kĩ năng đã làm trước đó nếu đã
          chuyển qua kĩ năng tiếp theo
        </Text>
        <Text style={ExamRoomStyles.instruction}>
          - Để chuyển qua phần tiếp theo hoặc kĩ năng tiếp theo, thí sinh hãy
          bấm vào nút "Tiếp Tục"
        </Text>
        <Text style={ExamRoomStyles.instruction}>
          - Nếu chọn nạp bài, hệ thống sẽ nạp toàn bộ bài thi, kể cả những phần
          chưa làm bài
        </Text>
      </View>
    </ScrollView>
  );
};

export default ExamInfomation;

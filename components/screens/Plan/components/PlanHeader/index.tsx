import HeaderTextBox from "@/components/ui/HeaderTextBox";
import IMAGES from "@/constants/images";
import React from "react";
import { Image, Text, View } from "react-native";
import PlanHeaderStyles from "./PlanHeader.style";

const PlanHeader = () => {
  const listPlanIntroduce = [
    {
      id: 1,
      title: "Ngân hàng đề thi phong phú",
      description: "Kho đề thi được cập nhật liên tục và bám sát đề thi thực tế",
      image: IMAGES.plans.plan1,
    },
    {
      id: 2,
      title: "Thi thử theo thời gian thực",
      description: "Thời gian và giao diện giống như thi thật, giúp bạn làm quen với áp lực thời gian",
      image: IMAGES.plans.plan2,
    },
    {
      id: 3,
      title: "Thống kê điểm số chi tiết",
      description: "Thống kê điểm số theo từng kỹ năng, giúp bạn theo dõi tiến độ học tập",
      image: IMAGES.plans.plan3,
    },
    {
      id: 4,
      title: "Chấm điểm bài thi tự luận",
      description: "Chấm điểm bài thi tự luận với độ chính xác cao, giúp bạn biết được khả năng của mình",
      image: IMAGES.plans.plan4,
    },
  ];
  return (
    <View style={PlanHeaderStyles.container}>
      <HeaderTextBox
        titleText={"Dịch vụ của English GO"}
        descriptionText={
          <Text style={PlanHeaderStyles.descriptionText}>
            Để chinh phục chứng chỉ tiếng anh B1{"\n"}
            Việc làm quen và luyện đề là một mấu chốt quan trọng.{"\n"}
            English GO cung cấp đầy đủ các dịch vụ để bạn ôn tập một cách hiệu quả, tối ưu điểm số qua từng bài làm.
          </Text>
        }
      />
      {listPlanIntroduce.map((item) => (
        <View key={item.id} style={PlanHeaderStyles.planHeaderItem}>
          <Image style={PlanHeaderStyles.planItemImage} source={item.image} />
          <View style={{ flex: 1 }}>
            <Text style={PlanHeaderStyles.planItemText}>{item.title}</Text>
            <Text style={PlanHeaderStyles.planItemDescription}>{item.description}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default PlanHeader;

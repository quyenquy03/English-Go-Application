import HeaderTextBox from "@/components/ui/HeaderTextBox";
import { RootState } from "@/stores";
import React from "react";
import { ScrollView, View } from "react-native";
import { useSelector } from "react-redux";
import FeedbackItem from "./FeedbackItem";
import HomeFeedbackStyles from "./HomeFeedback.style";

const HomeFeedback = () => {
  const { evaluates } = useSelector((state: RootState) => state.evaluateStore);
  return (
    <View style={HomeFeedbackStyles.container}>
      <HeaderTextBox titleText={"Đánh giá từ khách hàng"} descriptionText={"Khách hàng nói gì về hệ thống của chúng tôi?"} />
      <ScrollView horizontal style={HomeFeedbackStyles.list}>
        {evaluates?.map((evaluate) => (
          <FeedbackItem key={evaluate.id} evaluate={evaluate} />
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeFeedback;

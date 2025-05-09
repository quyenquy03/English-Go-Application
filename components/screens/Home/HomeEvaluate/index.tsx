import HeaderTextBox from "@/components/ui/HeaderTextBox";
import React from "react";
import { View } from "react-native";
import HomeEvalueateStyles from "./HomeEvaluate.style";

const HomeEvaluate = () => {
  return (
    <View style={HomeEvalueateStyles.container}>
      <HeaderTextBox
        titleText={"Đánh giá về English GO"}
        descriptionText={"Bạn có hài lòng khi sử dụng ứng dụng của chúng tôi? \n Hãy để lại đánh giá của bạn về English GO nhé!"}
      />
      <View style={HomeEvalueateStyles.formBox}>
        {/* NHIỆM VỤ 3: Tạo form đánh giá */}
      </View>
    </View>
  );
};

export default HomeEvaluate;

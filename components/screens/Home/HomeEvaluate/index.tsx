import HeaderTextBox from "@/components/ui/HeaderTextBox";
import React, { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import HomeEvalueateStyles from "./HomeEvaluate.style";
import { TextInput } from "react-native";
import { Button } from "@ui-kitten/components";
import Toast from "react-native-toast-message";
import { ISendIvaluateDTO } from "@/types/evaluate/EvaluateTypes";
import { AppDispatch } from "@/stores";
import { useDispatch } from "react-redux";
import { EvaluateActions } from "@/stores/evaluateStore/evaluateReducer";
import { IAppResposeBase } from "@/types/AppType";

const HomeEvaluate = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const dispatch: AppDispatch = useDispatch();

  const handleStarPress = (value: number) => {
    setRating(value);
  };

  const handleSubmit = () => {
    if (!rating || rating < 1) {
      Toast.show({
        type: "error",
        text1: "Vui lòng chọn đánh giá từ 1 đến 5 sao",
        text2: "Bạn có thể nhấn vào các ngôi sao để chọn đánh giá của mình.",
      });
      return;
    }
    if (!comment.trim()) {
      Toast.show({
        type: "error",
        text1: "Vui lòng nhập mô tả đánh giá",
        text2: "Bạn có thể để lại trải nghiệm của mình về ứng dụng.",
      });
      return;
    }
    const sendData: ISendIvaluateDTO = {
      starNumber: rating,
      description: comment,
    };
    dispatch(EvaluateActions.sendEvaluate(sendData)).then((response) => {
      if (!(response.payload as IAppResposeBase<unknown>)?.success) {
        Toast.show({
          type: "error",
          text1: "Đánh giá thất bại",
          text2:
            (response.payload as IAppResposeBase<unknown>)?.message ||
            "Vui lòng thử lại sau.",
        });
        return;
      }
      Toast.show({
        type: "success",
        text1: "Cảm ơn bạn đã đánh giá!",
        text2: "Đánh giá của bạn đã được gửi thành công.",
      });
      setRating(0);
      setComment("");
    });
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity key={i} onPress={() => handleStarPress(i)}>
          <Text
            style={[
              HomeEvalueateStyles.star,
              { color: i <= rating ? "#FFD700" : "#999" },
            ]}
          >
            ★
          </Text>
        </TouchableOpacity>
      );
    }
    return stars;
  };
  return (
    <View style={HomeEvalueateStyles.container}>
      <HeaderTextBox
        titleText={"Đánh giá về English GO"}
        descriptionText={
          "Bạn có hài lòng khi sử dụng ứng dụng của chúng tôi? \n Hãy để lại đánh giá của bạn về English GO nhé!"
        }
      />
      <View style={HomeEvalueateStyles.formBox}>
        {/* NHIỆM VỤ 3: Tạo form đánh giá */}
        <View style={HomeEvalueateStyles.starsContainer}>{renderStars()}</View>
        <TextInput
          style={HomeEvalueateStyles.textInput}
          placeholder="Hãy để lại trải nghiệm của bạn nhé!"
          multiline
          value={comment}
          onChangeText={setComment}
        />
        <View style={HomeEvalueateStyles.button}>
          <Button onPress={handleSubmit}>Gửi đánh giá</Button>
        </View>
      </View>
    </View>
  );
};

export default HomeEvaluate;

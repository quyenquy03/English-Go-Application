import IMAGES from "@/constants/images";
import { normalizeName } from "@/helpers/functions/normalizeName";
import { IEvaluate } from "@/types/evaluate/EvaluateTypes";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { Image, Text, View } from "react-native";
import HomeFeedbackStyles from "./HomeFeedback.style";
interface FeedbackItemProps {
  evaluate: IEvaluate;
}
const FeedbackItem = ({ evaluate }: FeedbackItemProps) => {
  return (
    <View style={HomeFeedbackStyles.item}>
      <View style={HomeFeedbackStyles.avatarBox}>
        <Image
          style={HomeFeedbackStyles.avatar}
          source={evaluate.user.avatar ? { uri: evaluate.user.avatar } : IMAGES.logoIcon}
          resizeMode='cover'
        />
      </View>
      <View style={HomeFeedbackStyles.contentBox}>
        <Text style={HomeFeedbackStyles.name}>{normalizeName(evaluate.user.fullName)}</Text>
        <View style={HomeFeedbackStyles.ratingBox}>
          {[1, 2, 3, 4, 5].map((item, index) => {
            return <FontAwesome key={index} name='star' size={13} color={item <= evaluate.starNumber ? "#FFD700" : "#999"} />;
          })}
        </View>
        <Text style={HomeFeedbackStyles.feexbackContent}>{evaluate.description}</Text>
      </View>
    </View>
  );
};

export default FeedbackItem;

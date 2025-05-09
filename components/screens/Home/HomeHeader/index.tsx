import IMAGES from "@/constants/images";
import React from "react";
import { Image, Text, View } from "react-native";
import HomeHeaderStyles from "./HomeHeader.style";

const HomeHeader = () => {
  return (
    <View style={HomeHeaderStyles.container}>
      <View style={HomeHeaderStyles.list}>
        <View style={HomeHeaderStyles.item}>
          <View style={HomeHeaderStyles.icon}>
            <Image style={HomeHeaderStyles.image} source={IMAGES.icons.iconPractice} resizeMode='contain' />
          </View>
          <Text style={HomeHeaderStyles.text}>Luyện thi</Text>
        </View>
        <View style={HomeHeaderStyles.item}>
          <View style={HomeHeaderStyles.icon}>
            <Image style={HomeHeaderStyles.image} source={IMAGES.icons.iconHistory} resizeMode='contain' />
          </View>
          <Text style={HomeHeaderStyles.text}>Lịch sử thi</Text>
        </View>
        <View style={HomeHeaderStyles.item}>
          <View style={HomeHeaderStyles.icon}>
            <Image style={HomeHeaderStyles.image} source={IMAGES.icons.iconReward} resizeMode='contain' />
          </View>
          <Text style={HomeHeaderStyles.text}>Dịch vụ</Text>
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;

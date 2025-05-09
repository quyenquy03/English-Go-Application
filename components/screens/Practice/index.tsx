import IMAGES from "@/constants/images";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import PracticeStyles from "./Practice.style";
const PracticeScreen = () => {
  const router = useRouter();
  const handleStartExam = () => {
    console.log("Start exam");
    router.push("/(tabs)/practice/exam-room");
  };
  return (
    <View style={PracticeStyles.container}>
      <View style={PracticeStyles.imageHeaderBox}>
        <Image style={PracticeStyles.imageHeader} source={IMAGES.banners.banner1} resizeMode='cover' />
      </View>
      <View style={PracticeStyles.contentBox}>
        <Image style={PracticeStyles.imageContent} source={IMAGES.banners.bannerTablet} resizeMode='contain' />
        <View style={PracticeStyles.contentText}>
          <Text style={PracticeStyles.appNameText}>ENGLISH GO</Text>
          <View style={PracticeStyles.titleBox}>
            <Text style={PracticeStyles.titleText}>{"NỀN TẢNG THI THỬ \n TIẾNG ANH B1 MIỄN PHÍ"}</Text>
            <Text style={[PracticeStyles.titleText]}>{"NỀN TẢNG THI THỬ \n TIẾNG ANH B1 MIỄN PHÍ"}</Text>
          </View>
          <Pressable onPress={handleStartExam} style={PracticeStyles.joinNowBtn}>
            <Text style={PracticeStyles.joinNowBtnText}> Vào thi ngay</Text>
          </Pressable>
        </View>
        <Image style={PracticeStyles.banner2} source={IMAGES.banners.banner2} resizeMode='cover' />
        <Image style={PracticeStyles.banner3} source={IMAGES.banners.banner3} resizeMode='cover' />
      </View>
    </View>
  );
};

export default PracticeScreen;

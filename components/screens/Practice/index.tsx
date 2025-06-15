import IMAGES from "@/constants/images";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import PracticeStyles from "./Practice.style";
import { AppDispatch } from "@/stores";
import { useDispatch } from "react-redux";
import { ExamActions } from "@/stores/examStore/examReducer";
import Toast from "react-native-toast-message";
const PracticeScreen = () => {
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();
  const handleStartExam = () => {
    dispatch(ExamActions.participateExam()).then((response) => {
      if (!(response.payload as any)?.success) {
        Toast.show({
          type: "error",
          text1: "Tham gia thi thất bại",
          text2: (response.payload as any)?.message || "Vui lòng thử lại sau.",
        });
        return;
      }
      Toast.show({
        type: "success",
        text1: "Tham gia thi thành công",
        text2: "Bạn đã tham gia vào phòng thi.",
      });
      router.push("/(tabs)/practice/exam-room");
    });
  };
  return (
    <View style={PracticeStyles.container}>
      <View style={PracticeStyles.imageHeaderBox}>
        <Image
          style={PracticeStyles.imageHeader}
          source={IMAGES.banners.banner1}
          resizeMode="cover"
        />
      </View>
      <View style={PracticeStyles.contentBox}>
        <Image
          style={PracticeStyles.imageContent}
          source={IMAGES.banners.bannerTablet}
          resizeMode="contain"
        />
        <View style={PracticeStyles.contentText}>
          <Text style={PracticeStyles.appNameText}>ENGLISH GO</Text>
          <View style={PracticeStyles.titleBox}>
            <Text style={PracticeStyles.titleText}>
              {"NỀN TẢNG THI THỬ \n TIẾNG ANH B1 MIỄN PHÍ"}
            </Text>
            <Text style={[PracticeStyles.titleText]}>
              {"NỀN TẢNG THI THỬ \n TIẾNG ANH B1 MIỄN PHÍ"}
            </Text>
          </View>
          <Pressable
            onPress={handleStartExam}
            style={PracticeStyles.joinNowBtn}
          >
            <Text style={PracticeStyles.joinNowBtnText}> Vào thi ngay</Text>
          </Pressable>
        </View>
        <Image
          style={PracticeStyles.banner2}
          source={IMAGES.banners.banner2}
          resizeMode="cover"
        />
        <Image
          style={PracticeStyles.banner3}
          source={IMAGES.banners.banner3}
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

export default PracticeScreen;

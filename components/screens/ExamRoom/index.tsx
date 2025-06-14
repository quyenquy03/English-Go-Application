import IMAGES from "@/constants/images";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Layout, ViewPager } from "@ui-kitten/components";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Image, Pressable, Text, View } from "react-native";
import ExamRoomStyles from "./ExamRoom.style";
import ContestantInfomation from "./components/ContestantInfomation";
import DeviceInfomation from "./components/DeviceInfomation";
import ExamInfomation from "./components/ExamInfomation";
import { AppDispatch } from "@/stores";
import { useDispatch } from "react-redux";
import { ExamActions } from "@/stores/examStore/examReducer";
import Toast from "react-native-toast-message";
const ExamRoomScreen = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();
  const handleChangeIndex = (type: "prev" | "next") => {
    if (type === "prev") {
      if (selectedIndex === 0) return;
      setSelectedIndex((prev) => (prev === 0 ? 2 : prev - 1));
    } else {
      if (selectedIndex === 2) return;
      setSelectedIndex((prev) => (prev === 2 ? 0 : prev + 1));
    }
  };
  useEffect(() => {
    dispatch(ExamActions.getCurrentExam()).then((res: any) => {
      if (!res.payload.success) {
        Toast.show({
          type: "error",
          text1: "Lấy thông tin phòng thi thất bại",
          text2: res.payload.message || "Vui lòng thử lại sau.",
        });
        router.push("/practice");
      }
    });
  }, []);
  const handleStartExam = () => {
    router.push("/exam/participate-exam");
  };
  return (
    <View style={ExamRoomStyles.container}>
      <Image
        style={ExamRoomStyles.bannerImage}
        source={IMAGES.banners.bannerLayout}
      />
      <View style={ExamRoomStyles.tabBox}>
        <ViewPager
          selectedIndex={selectedIndex}
          onSelect={(index) => setSelectedIndex(index)}
        >
          <Layout level="2" style={ExamRoomStyles.tab}>
            <DeviceInfomation />
          </Layout>
          <Layout level="2" style={ExamRoomStyles.tab}>
            <ExamInfomation />
          </Layout>
          <Layout level="2" style={ExamRoomStyles.tab}>
            <ContestantInfomation />
          </Layout>
        </ViewPager>
      </View>
      <View style={ExamRoomStyles.buttonBox}>
        <Pressable
          onPress={() => handleChangeIndex("prev")}
          style={ExamRoomStyles.buttonTab}
        >
          <FontAwesome name="caret-left" size={24} color="white" />
        </Pressable>
        <Pressable onPress={handleStartExam} style={ExamRoomStyles.buttonStart}>
          <Text style={ExamRoomStyles.buttonStartText}>Bắt đầu</Text>
        </Pressable>
        <Pressable
          onPress={() => handleChangeIndex("next")}
          style={ExamRoomStyles.buttonTab}
        >
          <FontAwesome name="caret-right" size={24} color="white" />
        </Pressable>
      </View>
      <Pressable style={ExamRoomStyles.buttonLeave}>
        <Text style={ExamRoomStyles.buttonLeaveText}>Rời khỏi phòng</Text>
      </Pressable>
    </View>
  );
};

export default ExamRoomScreen;

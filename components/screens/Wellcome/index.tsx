import IMAGES from "@/constants/images";
import { Layout, Text, ViewPager } from "@ui-kitten/components";
import { useRouter } from "expo-router";
import React, { useMemo } from "react";
import { Image, Pressable, View } from "react-native";
import wellcomeStyle from "./Wellcome.style";

const WellcomeScreen = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const router = useRouter();
  const wellcomeTabs = useMemo(
    () => [
      {
        key: "1",
        imageSource: IMAGES.wellcome.wellcome5,
        title: `Chào mừng bạn đến với ${"\n"} English GO`,
        button: {
          title: "Tiếp tục",
          onPress: () => setSelectedIndex(1),
        },
        description:
          "English GO là phần mềm luyện thi tiếng anh trực tuyến toàn diện, hiệu quả và được thiết kế để giúp cho người học có thể chuẩn bị một cách tốt nhất cho việc học và thi tiếng anh B1",
      },
      {
        key: "2",
        imageSource: IMAGES.wellcome.wellcome4,
        title: `Chinh phục tiếng anh B1 cùng ${"\n"} English GO`,
        button: {
          title: "Tiếp tục",
          onPress: () => setSelectedIndex(2),
        },
        description:
          "Với phương châm tự tin, chinh phục và đột phá, English GO hứa hẹn sẽ mang đến những trải nghiệm học tập mới lạ, thú vị và hiệu quả nhất cho người học",
      },
      {
        key: "3",
        imageSource: IMAGES.wellcome.wellcome6,
        title: `Bắt đầu hành trình đột phá tại ${"\n"} English GO`,
        button: {
          title: "Bắt đầu",
          onPress: () => router.replace("/login"),
        },
        description:
          "Bạn đang muốn tìm một phần mềm để luyện thi tiếng anh B1 một cách hiệu quả, hãy đến với English GO! Bắt đầu hành trình chinh phục tiếng anh B1 của bạn ngay thôi nào!",
      },
    ],
    []
  );
  return (
    <View style={{ position: "relative" }}>
      <ViewPager selectedIndex={selectedIndex} onSelect={(index) => setSelectedIndex(index)}>
        {wellcomeTabs.map((tab, index) => (
          <Layout key={index} level='2' style={wellcomeStyle.tab}>
            <View style={wellcomeStyle.imageBox}>
              <Image source={tab.imageSource} style={{ width: 300, height: 400 }} resizeMode='contain' />
            </View>
            <View style={wellcomeStyle.textBox}>
              <Text style={wellcomeStyle.tabTitle}>{tab.title}</Text>
              <Text style={wellcomeStyle.tabDescription}>{tab.description}</Text>
            </View>
          </Layout>
        ))}
      </ViewPager>
      <Pressable style={wellcomeStyle.tabButton} onPress={wellcomeTabs[selectedIndex]?.button?.onPress}>
        <Text style={wellcomeStyle.tabButtonText}>{wellcomeTabs[selectedIndex]?.button?.title}</Text>
      </Pressable>
      <Pressable style={wellcomeStyle.skipButton} onPress={() => router.replace("/login")}>
        <Text style={wellcomeStyle.skipButtonText}>Bỏ qua</Text>
      </Pressable>
    </View>
  );
};

export default WellcomeScreen;

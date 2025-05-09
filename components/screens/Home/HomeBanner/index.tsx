import IMAGES from "@/constants/images";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import HomeBannerStyles from "./HomeBanner.style";

const HomeBanner = () => {
  return (
    <View style={HomeBannerStyles.container}>
      <View style={HomeBannerStyles.list}>
        <View style={HomeBannerStyles.item}>
          <View style={HomeBannerStyles.imageBox}>
            <Image source={IMAGES.banners.bannerExam} resizeMode='contain' style={HomeBannerStyles.image} />
          </View>
          <View style={HomeBannerStyles.textBox}>
            <Text style={HomeBannerStyles.textHeader}>Tham gia luyện thi</Text>
            <Text style={HomeBannerStyles.textDescription}>
              Hãy tham gia luyện thi ngay hôm nay để sớm đột phá tiếng anh B1 nào!
            </Text>
            <Pressable onPress={() => {}} style={HomeBannerStyles.button}>
              <Text style={HomeBannerStyles.buttonText}>Tham gia ngay</Text>
            </Pressable>
          </View>
        </View>
        <View style={HomeBannerStyles.item}>
          <View style={HomeBannerStyles.textBox}>
            <Text style={HomeBannerStyles.textHeader}>Đăng ký dịch vụ</Text>
            <Text style={HomeBannerStyles.textDescription}>
              Trải nghiệm hết tính năng hấp dẫn của ứng dụng với các gói dịch vụ mà English GO cung cấp
            </Text>
            <Pressable onPress={() => {}} style={HomeBannerStyles.buttonShowDetail}>
              <Text style={HomeBannerStyles.buttonShowDetailText}>Xem chi tiết </Text>
            </Pressable>
          </View>
          <View style={HomeBannerStyles.imageBox}>
            <Image source={IMAGES.banners.bannerService} resizeMode='contain' style={HomeBannerStyles.image} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeBanner;

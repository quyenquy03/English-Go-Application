import HeaderTextBox from "@/components/ui/HeaderTextBox";
import IMAGES from "@/constants/images";
import React from "react";
import { ImageBackground, View } from "react-native";
import HomeAboutStyles from "./HomeAbout.style";

const HomeAbout = () => {
  return (
    <View style={HomeAboutStyles.container}>
      <HeaderTextBox titleText={"English GO"} descriptionText='English GO đã đạt được những gì từ khi đi vào hoạt động?' />
      <View style={HomeAboutStyles.list}>
        <View style={[HomeAboutStyles.item, { backgroundImage: IMAGES.about.about1 }]}>
          <ImageBackground source={IMAGES.about.about1} style={{ width: "100%", minHeight: 130, borderRadius: 10 }}>
            <View style={HomeAboutStyles.itemContent}></View>
          </ImageBackground>
        </View>
        <View style={[HomeAboutStyles.item, { backgroundImage: IMAGES.about.about1 }]}>
          <ImageBackground source={IMAGES.about.about2} style={{ width: "100%", minHeight: 130, borderRadius: 10 }}>
            <View style={HomeAboutStyles.itemContent}></View>
          </ImageBackground>
        </View>
      </View>
      <View style={HomeAboutStyles.list}>
        <View style={[HomeAboutStyles.item, { backgroundImage: IMAGES.about.about1 }]}>
          <ImageBackground source={IMAGES.about.about3} style={{ width: "100%", minHeight: 130, borderRadius: 10 }}>
            <View style={HomeAboutStyles.itemContent}></View>
          </ImageBackground>
        </View>
        <View style={[HomeAboutStyles.item, { backgroundImage: IMAGES.about.about1 }]}>
          <ImageBackground source={IMAGES.about.about4} style={{ width: "100%", minHeight: 130, borderRadius: 10 }}>
            <View style={HomeAboutStyles.itemContent}></View>
          </ImageBackground>
        </View>
      </View>
    </View>
  );
};

export default HomeAbout;

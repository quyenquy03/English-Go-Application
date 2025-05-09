import COLORS from "@/constants/color";
import FONTS from "@/constants/fonts";
import IMAGES from "@/constants/images";
import React from "react";
import { Image, Text, View } from "react-native";
import ProfileInfomationStyles from "./ProfileInfomation.style";

const ProfileInfomation = () => {
  return (
    <View style={ProfileInfomationStyles.container}>
      <View style={ProfileInfomationStyles.avatarBox}>
        <Image source={IMAGES.logoIcon} style={ProfileInfomationStyles.avatarImage} resizeMode='contain' />
      </View>
      <View style={ProfileInfomationStyles.contentBox}>
        <Text style={ProfileInfomationStyles.textName}>Nguyễn Tạ Quyền</Text>
        <Text style={ProfileInfomationStyles.textUserName}>214559384910293</Text>
      </View>
      <View style={ProfileInfomationStyles.statisticalBox}>
        <View style={ProfileInfomationStyles.statisticalItem}>
          <View style={ProfileInfomationStyles.statisticalItemTitle}>
            <Text style={{ fontFamily: FONTS.MERIENDA_BOLD, color: COLORS.secondary }}>Số lượt tham gia thi</Text>
          </View>
          <View style={ProfileInfomationStyles.statisticalItemValue}>
            <Text style={{ fontFamily: FONTS.MERIENDA_MEDIUM, color: COLORS.secondary, fontSize: 25, lineHeight: 35 }}>100</Text>
          </View>
        </View>
        <View style={ProfileInfomationStyles.statisticalItem}>
          <View style={ProfileInfomationStyles.statisticalItemTitle}>
            <Text style={{ fontFamily: FONTS.MERIENDA_BOLD, color: COLORS.secondary }}>Loại tài khoản</Text>
          </View>
          <View style={ProfileInfomationStyles.statisticalItemValue}>
            <Text style={{ fontFamily: FONTS.MERIENDA_MEDIUM, color: COLORS.secondary }}>Quản trị viên</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileInfomation;

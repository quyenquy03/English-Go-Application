import COLORS from "@/constants/color";
import IMAGES from "@/constants/images";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { ImageBackground, TouchableOpacity, View } from "react-native";
import ChangeAvatarStyles from "./ChangeAvatar.style";
interface ChangeAvatarProps {
  size?: number | string;
}
const ChangeAvatar = ({ size = 90 }: ChangeAvatarProps) => {
  return (
    <View style={[ChangeAvatarStyles.container, { width: size as number, height: size as number }]}>
      <View style={ChangeAvatarStyles.avatarBox}>
        <ImageBackground source={IMAGES.logoIcon} style={ChangeAvatarStyles.avatarImage} />
      </View>
      <TouchableOpacity activeOpacity={0.7} style={ChangeAvatarStyles.cameraButton}>
        <FontAwesome name='camera' size={15} color={COLORS.primary} />
      </TouchableOpacity>
    </View>
  );
};

export default ChangeAvatar;

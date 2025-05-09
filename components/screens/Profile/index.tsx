import COLORS from "@/constants/color";
import { RootState } from "@/stores";
import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import ProfileAction from "./ProfileAction";
import ProfileInfomation from "./ProfileInfomation";

const ProfileScreen = () => {
  const { groupRoles } = useSelector((state: RootState) => state.appStore);
  // console.log("groupRoles in profile", groupRoles);
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.bgPrimary, padding: 10 }}>
      <ProfileInfomation />
      <ProfileAction />
    </View>
  );
};

export default ProfileScreen;

import { removeAccessToken } from "@/helpers/functions/accessToken";
import { useRouter } from "expo-router";
import React, { useMemo } from "react";
import { View } from "react-native";
import ActionItem from "./ActionItem";
import ProfileActionStyles from "./ProfileAction.style";

const ProfileAction = () => {
  const router = useRouter();
  const handleLogout = () => {
    // Logout
    removeAccessToken();
    router.navigate("/wellcome");
  };
  const listAction = useMemo(() => {
    return [
      {
        key: 1,
        title: "Cập nhật thông tin cá nhân",
        icon: "user",
        onPress: () => router.push("/(tabs)/profile/update-profile"),
      },
      {
        key: 2,
        title: "Đổi mật khẩu",
        icon: "lock",
        onPress: () => router.push("/(tabs)/profile/change-password"),
      },
      {
        key: 3,
        title: "Lịch sử luyện thi",
        icon: "history",
        onPress: () => {},
      },
      {
        key: 4,
        title: "Gói dịch vụ của tôi",
        icon: "gears",
        onPress: () => {},
      },
      {
        key: 5,
        title: "Lịch sử đăng ký dịch vụ",
        icon: "history",
        onPress: () => {},
      },
      {
        key: 6,
        title: "Đăng xuất",
        icon: "sign-out",
        onPress: handleLogout,
      },
    ];
  }, []);
  return (
    <View style={ProfileActionStyles.container}>
      {listAction.map((item) => (
        <ActionItem onPress={item.onPress} key={item.key} title={item.title} icon={item.icon} />
      ))}
    </View>
  );
};

export default ProfileAction;

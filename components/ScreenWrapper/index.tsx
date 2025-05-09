import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface IScreenWrapperProps {
  children: React.ReactNode;
  bg?: string;
}

const ScreenWrapper = ({ children, bg }: IScreenWrapperProps) => {
  const { top } = useSafeAreaInsets();
  const paddingTop = 0;
  return <View style={{ flex: 1, backgroundColor: bg || "#fff", paddingTop }}>{children}</View>;
};

export default ScreenWrapper;

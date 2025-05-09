import COLORS from "@/constants/color";
import React from "react";
import { ScrollView, View } from "react-native";

interface ScrollViewCustomProps {
  children: React.ReactNode;
  showsVerticalScrollIndicator?: boolean;
  style?: any;
  showHeader?: boolean;
}
const ScrollViewCustom = ({
  children,
  showsVerticalScrollIndicator = false,
  style,
  showHeader = true,
}: ScrollViewCustomProps) => {
  return (
    <View style={{ flex: 1, position: "relative" }}>
      <ScrollView
        style={{ flex: 1, backgroundColor: COLORS.bgPrimary, ...style }}
        showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      >
        {/* {showHeader && <StackHeader />} */}
        {children}
        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  );
};

export default ScrollViewCustom;

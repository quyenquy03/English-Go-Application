import React from "react";
import { View } from "react-native";
import WellcomeBox from "../components/WellcomeBox";
import MainLayoutStyles from "./MainLayout.style";

interface MainLayoutProps {
  children: React.ReactNode;
}
const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <View style={MainLayoutStyles.container}>
      <View style={MainLayoutStyles.wellcomeBox}>
        <WellcomeBox />
      </View>
      <View style={MainLayoutStyles.contentBox}>{children}</View>
    </View>
  );
};

export default MainLayout;

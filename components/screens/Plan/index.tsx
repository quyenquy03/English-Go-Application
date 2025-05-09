import React from "react";
import { View } from "react-native";
import PlanStyles from "./Plan.style";
import ListPackage from "./components/ListPackage";
import PlanHeader from "./components/PlanHeader";
import GradingServicePackage from "./components/GradingService";

const PlanScreen = () => {
  return (
    <View style={PlanStyles.container}>
      <PlanHeader />
      <ListPackage />
      <GradingServicePackage />
    </View>
  );
};

export default PlanScreen;

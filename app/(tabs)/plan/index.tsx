import MainLayout from "@/components/layouts/MainLayout";
import PlanScreen from "@/components/screens/Plan";
import ScrollViewCustom from "@/components/ui/ScrollViewCustom";
import React from "react";

const PlanTab = () => {
  return (
    <MainLayout>
      <ScrollViewCustom>
        <PlanScreen />
      </ScrollViewCustom>
    </MainLayout>
  );
};

export default PlanTab;

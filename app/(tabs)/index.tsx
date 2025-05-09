import MainLayout from "@/components/layouts/MainLayout";
import HomeScreen from "@/components/screens/Home";
import ScrollViewCustom from "@/components/ui/ScrollViewCustom";
import React from "react";

const HomeTab = () => {
  return (
    <MainLayout>
      <ScrollViewCustom>
        <HomeScreen />
      </ScrollViewCustom>
    </MainLayout>
  );
};

export default HomeTab;

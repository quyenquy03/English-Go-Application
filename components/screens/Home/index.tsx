import { AppDispatch } from "@/stores";
import { EvaluateActions } from "@/stores/evaluateStore/evaluateReducer";
import React, { useEffect } from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import HomeStyles from "./Home.style";
import HomeAbout from "./HomeAbout";
import HomeBanner from "./HomeBanner";
import HomeEvaluate from "./HomeEvaluate";
import HomeFeedback from "./HomeFeedback";
import HomeHeader from "./HomeHeader";

const HomeScreen = () => {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(EvaluateActions.getAllEvaluates({ page: 1, limit: 10, isShow: true }));
  }, [dispatch]);
  return (
    <View style={HomeStyles.container}>
      <HomeHeader />
      <HomeBanner />
      <HomeAbout />
      <HomeFeedback />
      <HomeEvaluate />
    </View>
  );
};

export default HomeScreen;

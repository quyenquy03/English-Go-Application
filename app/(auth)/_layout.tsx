import COLORS from "@/constants/color";
import IMAGES from "@/constants/images";
import { Stack } from "expo-router";
import React from "react";
import { Image, View } from "react-native";

const AuthLayout = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.backgroundPrimary,
        // padding: 20,
      }}
    >
      <View
        style={{
          alignItems: "center",
          marginTop: 30,
          marginBottom: 30,
          position: "relative",
          height: 230,
        }}
      >
        <View
          style={{
            height: 200,
            width: "130%",
            backgroundColor: "#ffeff8",
            borderBottomRightRadius: 200,
            borderBottomLeftRadius: 200,
          }}
        />
        <Image
          source={IMAGES.logoIcon}
          resizeMode='contain'
          style={{ width: 150, height: 150, position: "absolute", top: 100 }}
        />
      </View>
      <Stack
        screenOptions={{ headerShown: false, contentStyle: { backgroundColor: COLORS.backgroundPrimary, flex: 1, padding: 20 } }}
      >
        <Stack.Screen name='login' />
        <Stack.Screen name='register' />
      </Stack>
    </View>
  );
};

export default AuthLayout;

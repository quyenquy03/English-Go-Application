import MainLayout from "@/components/layouts/MainLayout";
import { Stack } from "expo-router";
import React from "react";
import { View } from "react-native";

const PractiseLayout = () => {
  return (
    <MainLayout>
      <View style={{ flex: 1 }}>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { flex: 1 },
          }}
        >
          <Stack.Screen name='index' />
          <Stack.Screen name='grading' />
        </Stack>
      </View>
    </MainLayout>
  );
};

export default PractiseLayout;

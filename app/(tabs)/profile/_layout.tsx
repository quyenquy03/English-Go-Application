import MainLayout from "@/components/layouts/MainLayout";
import { Stack } from "expo-router";
import React from "react";
import { View } from "react-native";

const ProfileLayout = () => {
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
          <Stack.Screen name='change-password' />
          <Stack.Screen name='update-profile' />
        </Stack>
      </View>
    </MainLayout>
  );
};

export default ProfileLayout;

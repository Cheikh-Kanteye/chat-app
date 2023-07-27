import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="Signin" options={{ title: "SIgnin" }} />
      <Stack.Screen name="Signup" options={{ title: "Signup" }} />
    </Stack>
  );
};

export default AuthLayout;

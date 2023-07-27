import { View, Text, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/Colors";
import { Button } from "@/components";
import { router } from "expo-router";

const Start = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, paddingHorizontal: 24, backgroundColor: COLORS.white }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          gap: 38,
        }}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Ionicons
            name="chatbubble-ellipses"
            size={150}
            color={COLORS.primary}
          />
          <Text style={{ fontSize: 32, color: COLORS.primary }}>Chat App</Text>
        </View>
        <Text
          style={{ fontSize: 22, color: COLORS.darkGrey, textAlign: "center" }}
        >
          Simple Secure Reliable Messaging
        </Text>
      </View>
      <View style={{ flex: 0.23 }}>
        <Button
          label="Get Started"
          onPress={() => router.push("/(auth)/Signup")}
        />
        <Text
          style={{
            fontSize: 16,
            color: COLORS.darkGrey,
            textAlign: "center",
            paddingTop: 20,
          }}
        >
          Already Have an account?{" "}
          <Text
            onPress={() => router.push("/(auth)/Signin")}
            style={{ color: COLORS.primary }}
          >
            Sign in
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Start;

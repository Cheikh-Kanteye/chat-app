import { Tabs } from "expo-router";
import { Platform } from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

import THEME from "@/constants/Colors";
import { useEffect } from "react";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: THEME.light.tint,
        tabBarStyle: {
          backgroundColor: THEME.light.background,
        },
      }}
    >
      <Tabs.Screen
        name="Chat"
        options={{
          title: "Chats",
          tabBarIcon: ({ color }) => (
            <Ionicons name="chatbubble-ellipses" size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Groups"
        options={{
          title: "Groups",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="users" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Call"
        options={{
          title: "Recent",
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-call" size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={22} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

import { Tabs } from "expo-router";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

import COLORS from "@/constants/Colors";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLORS.primary,
        tabBarStyle: {
          backgroundColor: COLORS.white,
        },
        headerShadowVisible: false,
        headerStyle: { backgroundColor: COLORS.white },
        tabBarHideOnKeyboard: true,
        headerTitleStyle: {
          fontFamily: "LatoBold",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Chats",
          tabBarIcon: ({ color }) => (
            <Ionicons name="chatbubble-ellipses" size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="groups"
        options={{
          title: "Groups",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="users" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="call"
        options={{
          title: "Recent",
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-call" size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={22} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;

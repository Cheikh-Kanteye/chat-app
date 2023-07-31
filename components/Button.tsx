import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import COLORS from "@/constants/Colors";

interface ButtonProps {
  label: string;
  onPress: () => void;
}

const Button = ({ label, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        width: "100%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        backgroundColor: COLORS.primary,
      }}
      onPress={onPress}
    >
      <Text
        style={{ fontSize: 18, fontWeight: "500", color: COLORS.brightGray }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

import {
  View,
  Text,
  TextInputProps,
  TextInput,
  StyleSheet,
} from "react-native";
import React, { SetStateAction } from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/Colors";

interface InputProps extends TextInputProps {
  label: string;
  value: string;
  setValue: React.Dispatch<SetStateAction<string>>;
  icon: React.ComponentProps<typeof Ionicons>["name"];
}

const Input = (props: InputProps) => {
  const { value, label, icon, setValue } = props;

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <Ionicons name={icon} size={22} color={COLORS.grey} />
        <TextInput
          style={styles.input}
          {...props}
          value={value}
          onChangeText={setValue}
        />
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 10,
    backgroundColor: COLORS.lightGray,
    padding: 10,
    borderRadius: 10,
  },
  input: {
    flex: 1,
    height: "100%",
  },
  label: {
    fontSize: 16,
    color: COLORS.darkGrey,
  },
});

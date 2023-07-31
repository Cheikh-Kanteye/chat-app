import {
  View,
  Text,
  TextInputProps,
  TextInput,
  StyleSheet,
} from "react-native";
import React, { SetStateAction } from "react";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "@/constants/Colors";

interface InputProps extends TextInputProps {
  label: string;
  value: string;
  error?: any;
  setValue: React.Dispatch<SetStateAction<string>>;
  icon: React.ComponentProps<typeof Ionicons>["name"];
}

const Input = (props: InputProps) => {
  const { value, label, icon, setValue, error } = props;

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View
        style={[
          styles.inputContainer,
          { borderWidth: error ? StyleSheet.hairlineWidth : 0 },
        ]}
      >
        <Ionicons
          name={icon}
          size={22}
          color={error ? COLORS.danger : COLORS.grey}
          style={{ padding: 10 }}
        />
        <TextInput
          style={styles.input}
          {...props}
          value={value}
          onChangeText={setValue}
          placeholderTextColor={error ? COLORS.danger : COLORS.lightGrey}
          autoCapitalize="none"
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
    marginTop: 10,
    backgroundColor: COLORS.lightGray,
    height: 50,
    borderRadius: 10,
    borderColor: COLORS.danger,
  },
  input: {
    flex: 1,
    padding: 10,
    height: "100%",
  },
  label: {
    fontSize: 16,
    color: COLORS.darkGrey,
  },
});

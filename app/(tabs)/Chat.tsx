import { useState } from "react";
import COLORS from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TextInput, View } from "react-native";

const Chat = () => {
  const [blur, isBlured] = useState(false)
  return (
    <View style={styles.container}>
      <View style={styles.searchInput} >
        <Ionicons name="search" size={22} color={blur? COLORS.lightGrey : COLORS.darkGrey} />
        <TextInput style={styles.input} placeholder="Search" onFocus={() => isBlured(false)} onBlur={() => isBlured(true)} placeholderTextColor={COLORS.lightGrey} 
    />
      </View>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 18
  },
  searchInput: {
    width: "100%",
    height: 50,
    borderRadius: 25,
    flexDirection: "row",
    alignItems:"center",
    gap: 16,
    backgroundColor: COLORS.lightGray,
    paddingHorizontal: 10
  },
  input: {
    height: 50,
    width: "100%",
    color: COLORS.darkGrey
  }
});

// @ts-ignore
import { useState } from "react";
import { COLORS } from "@/constants/Colors";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  StatusBar,
} from "react-native";
import { Button, Input } from "@/components";
import { images } from "@/assets";
import { router } from "expo-router";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <ImageBackground
        source={images.pattern}
        resizeMode="cover"
        style={{
          width: "100%",
          height: "100%",
          paddingTop: StatusBar.currentHeight,
        }}
      >
        <View style={styles.header}>
          <Text style={styles.headerTittle}>Login</Text>
          <Text style={styles.headerLabel}>Login to your account</Text>
        </View>
        <View style={styles.modal}>
          <Input
            icon="mail"
            label="Email"
            value={email}
            setValue={setEmail}
            placeholder="Enter mail"
          />
          <Input
            icon="lock-closed"
            label="Password"
            secureTextEntry
            value={password}
            setValue={setPassword}
            placeholder="Enter your password"
          />
          <Text
            onPress={() => router.push("/(auth)/ForgotPassword")}
            style={{ ...styles.text, textAlign: "right" }}
          >
            Forgot Password?
          </Text>
          <Button label="Sign in" onPress={() => null} />
          <Text style={styles.text}>Or Connect With</Text>
          <TouchableOpacity style={styles.socialBtn}>
            <Image
              source={images.google}
              resizeMode="contain"
              style={{ width: 24, height: 24 }}
            />
            <Text style={styles.socialBtnLabel}>Connect with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialBtn}>
            <Image
              source={images.facebook}
              resizeMode="contain"
              style={{ width: 26, height: 26 }}
            />
            <Text style={styles.socialBtnLabel}>Connect with Facebook</Text>
          </TouchableOpacity>
          <Text style={styles.text}>
            Don't have account?{" "}
            <Text
              style={{ color: COLORS.primary }}
              onPress={() => router.push("/(auth)/Signup")}
            >
              Sign Up
            </Text>
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  header: {
    height: 120,
    padding: 20,
  },
  headerTittle: {
    fontSize: 22,
    color: COLORS.white,
    fontWeight: "600",
    lineHeight: 40,
  },
  headerLabel: {
    color: COLORS.brightGray,
    textTransform: "capitalize",
    fontSize: 15,
  },
  modal: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 60,
    paddingHorizontal: 20,
    gap: 20,
  },
  text: {
    fontSize: 16,
    color: COLORS.grey,
    textAlign: "center",
  },
  socialBtn: {
    padding: 15,
    gap: 16,
    flexDirection: "row",
    backgroundColor: COLORS.lightGray,
    borderRadius: 30,
  },
  socialBtnLabel: {
    fontSize: 16,
    color: COLORS.grey,
  },
});

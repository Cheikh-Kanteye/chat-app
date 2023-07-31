// @ts-ignore
import { useState } from "react";
import COLORS from "@/constants/Colors";
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
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "@/config/firebaseConfig";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  let user;

  const _handleSignup = () => {
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(FIREBASE_AUTH, email, password)
        .then((userCredentials) => {
          user = userCredentials.user;
        })
        .catch((err) => {
          setError(err);
          setTimeout(() => setError(null), 2000);
        });
    } else {
      setError("Password doesn't match" as never);
    }
  };

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
          <Text style={styles.headerTittle}>Register</Text>
          <Text style={styles.headerLabel}>Create your account</Text>
        </View>
        <View style={styles.modal}>
          <Input
            icon="mail"
            label="Email"
            value={email}
            setValue={setEmail}
            placeholder="Enter mail"
            error={error}
          />
          <Input
            icon="lock-closed"
            label="Password"
            secureTextEntry
            value={password}
            error={error}
            setValue={setPassword}
            placeholder="Enter your password"
          />
          <Input
            icon="lock-closed"
            label="Confirm Password"
            secureTextEntry
            error={error}
            value={confirmPassword}
            setValue={setConfirmPassword}
            placeholder="Confirm your password"
          />
          <Button label="Sign in" onPress={_handleSignup} />
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
            Already have an account?{" "}
            <Text
              style={{ color: COLORS.primary }}
              onPress={() => router.push("/(auth)/signin")}
            >
              Sign In
            </Text>
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  header: {
    height: 80,
    paddingHorizontal: 20,
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
    paddingTop: 40,
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

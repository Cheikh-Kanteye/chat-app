//@ts-ignore
import React, { useEffect, useState } from "react";
import COLORS from "@/constants/Colors";
import { useFonts } from "expo-font";
import {
  Redirect,
  SplashScreen,
  Stack,
  router,
  useRootNavigation,
  useSegments,
} from "expo-router";
import * as NavBar from "expo-navigation-bar";
import { Platform, View } from "react-native";
import { FIREBASE_AUTH } from "@/config/firebaseConfig";
import { User, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import useProtectedRoute, { AuthContext } from "@/utils/context"; 

export { ErrorBoundary } from "expo-router";


SplashScreen.preventAutoHideAsync();

function RootLayoutNav() {
  const [user, setAuth] = useState<User | null>(null); 
  const [error, setError] = useState(null);

  const _handleSignin = async (email: string, password: string) => {
    try {
      return await signInWithEmailAndPassword(FIREBASE_AUTH, email, password) 
    } catch (error) {
      setError(error as never)
      throw error
    }
  };

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (currentUser) => {
      if(currentUser){
        setAuth(currentUser)
        router.replace("/(tabs)")
      } 
    })
  }, [])

  // useProtectedRoute(user)



  return (
    <AuthContext.Provider
      value={{
        signIn: _handleSignin,
        signOut: () => setAuth(null),
        user,
        error,
      }}
    >
      <Stack screenOptions={{ headerShown: false }} initialRouteName={user ? "(tabs)" : "(auth)"}  >
        {!user ? 
        <Stack.Screen name={"(auth)"} /> :
        <Stack.Screen name={"(tabs)"} />
        }
      </Stack>
    </AuthContext.Provider>
  );
}

export default function RootLayout() {
  const [loaded, error] = useFonts({
    LatoBold: require("../assets/fonts/Lato-Bold.ttf"),
    LatoMedium: require("../assets/fonts/Lato-Medium.ttf"),
    LatoRegular: require("../assets/fonts/Lato-Regular.ttf"),
  });

  useEffect(() => {
    if (Platform.OS == "android") NavBar.setBackgroundColorAsync(COLORS.white);
  }, []);

  
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav/>;
}



import React, { createContext } from "react";
import { router, useRootNavigationState, useSegments } from "expo-router";
import { User } from "firebase/auth";

export type AuthContextType = {
  signIn: (email: string, password: string) => void;
  signOut: () => void;
  user: User | null;
  error: any;
};

export const AuthContext = createContext<AuthContextType | null>(null);


export function useAuth() {
  return React.useContext(AuthContext) as AuthContextType;
}

export default function useProtectedRoute(user: User | null) {
  const segments = useSegments(); 

  React.useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";

    if (!user && !inAuthGroup) { 
      router.replace("/start");
    } else if (user) { 
      router.replace("/(tabs)");
    }
  }, [user, segments]);
}

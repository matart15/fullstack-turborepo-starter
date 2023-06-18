import { useRouter, useSegments } from "expo-router";
import { supabase } from "../lib/supabase";
import React, { useState } from "react";
import { Alert, Text } from "react-native";

type AuthContextType = {
  signIn: (a: EmailPassword) => Promise<void>;
  signUp: (a: EmailPassword) => Promise<void>;
  signOut: () => void;
  user: any;
}
const AuthContext = React.createContext<AuthContextType | null>(null);

// This hook can be used to access the user info.
export function useAuth() {
  return React.useContext(AuthContext);
}

// This hook will protect the route access based on user authentication.
function useProtectedRoute(user) {
  const segments = useSegments();
  const router = useRouter();

  React.useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";
    if (
      // If the user is not signed in and the initial segment is not anything in the auth group.
      !user &&
      !inAuthGroup
    ) {
      // Redirect to the sign-in page.
      router.replace("/sign-in");
    } else if (user && inAuthGroup) {
      // Redirect away from the sign-in page.
      router.replace("/");
    }
  }, [user, segments]);
}

type EmailPassword = {
  email: string;
  password: string;
}
export function Provider(props) {
  const [user, setAuth] = useState<any | null>(null);
  const [loading, setLoading] = useState(false)
  async function signInWithEmail({
    email, 
    password
  }: EmailPassword ) {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
    setLoading(false)
  }

  async function signUpWithEmail({
    email, 
    password
  }: EmailPassword) {
    setLoading(true)
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
    setLoading(false)
  }
  
  useProtectedRoute(user);
  console.log("loading ", loading)
  if(loading) return <Text>Loading...</Text>
  return (
    <AuthContext.Provider
      value={{
        signIn:  signInWithEmail,
        signUp:  signUpWithEmail,
        signOut: () =>  setAuth(null),
        user,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
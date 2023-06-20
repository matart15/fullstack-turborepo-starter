import { useRouter, useSegments } from 'expo-router';
import React, { FunctionComponent, useCallback, useContext, useMemo, useState } from 'react';
import { Alert, Text } from 'react-native';

import { supabase } from '../lib/supabase';

type EmailPassword = {
  email: string;
  password: string;
};

type AuthContextType = {
  signIn: (a: EmailPassword) => Promise<void>;
  signUp: (a: EmailPassword) => Promise<void>;
  signOut: () => void;
  user: any;
};

const AuthContext = React.createContext<AuthContextType | null>(null);

// This hook can be used to access the user info.
export const useAuth = (): AuthContextType => {
  return useContext(AuthContext) as AuthContextType;
};

// This hook will protect the route access based on user authentication.
const useProtectedRoute = (user: any): void => {
  const segments = useSegments();
  const router = useRouter();

  React.useEffect(() => {
    const inAuthGroup = segments[0] === '(auth)';
    if (
      // If the user is not signed in and the initial segment is not anything in the auth group.
      !user &&
      !inAuthGroup
    ) {
      // Redirect to the sign-in page.
      router.replace('/sign-in');
    } else if (user && inAuthGroup) {
      // Redirect away from the sign-in page.
      router.replace('/');
    }
  }, [user, segments, router]);
};

export const Provider: FunctionComponent = props => {
  const [user, setAuth] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);

  const signInWithEmail = useCallback(async ({ email, password }: EmailPassword): Promise<void> => {
    setLoading(true);
    const result = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    const { error, data } = result;
    console.log('🚀 ~ result:', result);
    if (error) Alert.alert(error.message);
    else setAuth(data);
    setLoading(false);
  }, []);

  const signUpWithEmail = useCallback(async ({ email, password }: EmailPassword): Promise<void> => {
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  }, []);

  const signOut = (): void => setAuth(null);
  useProtectedRoute(user);
  console.log('loading ', loading);

  const authContextValue = useMemo(
    () => ({
      signIn: signInWithEmail,
      signUp: signUpWithEmail,
      signOut,
      user,
    }),
    [signInWithEmail, signUpWithEmail, signOut, user],
  );

  if (loading) return <Text>Loading...</Text>;
  return <AuthContext.Provider value={authContextValue}>{props.children}</AuthContext.Provider>;
};

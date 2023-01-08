import { setAccessToken } from 'lib/apollo-client';
import Router from 'next/router';
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { CurrentUserQuery, useCurrentUserLazyQuery, useSignInUserMutation, useSignUpUserMutation } from 'types/graphql';
import { popup } from 'ui/components/popup';

type AuthContextType = {
  currentUser?: CurrentUserQuery['currentUser'];
  loading: boolean;

  signIn: (a: { email: string; password: string }) => void;
  signUp: (a: { email: string; password: string }) => void;
  signOut: () => void;
};
const AuthContext = createContext<AuthContextType>({
  currentUser: undefined,
  loading: false,

  signIn: () => {},
  signUp: () => {},
  signOut: () => {},
});

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUserLazyQuery] = useCurrentUserLazyQuery();
  const [signInUserMutation] = useSignInUserMutation();
  const [signUpUserMutation] = useSignUpUserMutation();

  const [currentUser, setCurrentUser] = useState<CurrentUserQuery['currentUser']>();
  const [loading, setLoading] = useState(true);

  const signOut = (): void => {
    setAccessToken('');
    setCurrentUser(undefined);
  };

  const fetchCurrentUser = useCallback(async () => {
    setLoading(true);

    try {
      const { data } = await currentUserLazyQuery();
      if (data?.currentUser) {
        setCurrentUser(data.currentUser);
      } else {
        signOut();
      }
    } finally {
      setLoading(false);
    }
  }, [currentUserLazyQuery]);

  const signIn = async ({ email, password }: { email: string; password: string }): Promise<void> => {
    try {
      setLoading(true);
      const { data, errors } = await signInUserMutation({
        variables: {
          data: {
            email,
            password,
          },
        },
      });

      if (errors && errors?.length > 0) {
        setLoading(false);
        popup.error(errors[0]);
        // throw errors[0];
      } else if (data) {
        const { jwtToken } = data.signInUser;
        setAccessToken(jwtToken);
        await fetchCurrentUser();
      }
    } catch (error) {
      setLoading(false);
      popup.error(error);
    }
  };
  const signUp = async ({ email, password }: { email: string; password: string }): Promise<void> => {
    setLoading(true);
    const { data, errors } = await signUpUserMutation({
      variables: {
        data: {
          email,
          password,
        },
      },
    });

    if (errors && errors?.length > 0) {
      setLoading(false);
      throw errors[0];
    } else if (data) {
      const signUpSuccess = data.signUpUser;
      if (signUpSuccess) {
        signIn({ email, password });
      }
    }
  };
  useEffect(() => {
    fetchCurrentUser();
  }, [fetchCurrentUser]);
  const value = useMemo(
    () => ({
      currentUser,
      loading,
      signIn,
      signUp,
      signOut,
    }),
    [],
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = (): AuthContextType => useContext(AuthContext);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProtectRoute = (Component: React.ComponentType<any>): ((pageProps: any) => JSX.Element | null) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const protectedRoute = (pageProps: any): JSX.Element | null => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { currentUser, loading } = useAuth();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (!currentUser && !loading) Router.push('/sign_in').catch(_e => {});
    }, [loading, currentUser]);

    if (!currentUser) {
      return null;
    }

    return <Component {...pageProps} />;
  };
  return protectedRoute;
};

export { AuthProvider, ProtectRoute, useAuth };

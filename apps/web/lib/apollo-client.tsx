import { ApolloClient, createHttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { parse as cookieParse } from 'cookie';
import merge from 'deepmerge';
import Cookies from 'js-cookie';
import { GetServerSidePropsContext } from 'next';

const ACCESS_TOKEN_KEY = '_access_token';
type AccessToken = string;
const getAccessToken = (context?: GetServerSidePropsContext): string => {
  if (typeof window === 'undefined') {
    const cookie = context?.req?.headers?.cookie || '';
    const parsedCookies = cookieParse(cookie);
    return parsedCookies[ACCESS_TOKEN_KEY];
  }
  const accessToken: AccessToken = Cookies.get(ACCESS_TOKEN_KEY) || '';
  return accessToken;
};

export const setAccessToken: (value: AccessToken) => void = value => {
  Cookies.set(ACCESS_TOKEN_KEY, value);
};

let apolloClient: ApolloClient<NormalizedCacheObject>;
const createApolloClient = (context?: GetServerSidePropsContext): ApolloClient<NormalizedCacheObject> => {
  const httpLink = createHttpLink({
    uri: process.env.NEXT_PUBLIC_GRQPHQL_API_ENDPOINT || 'http://localhost:8080/v1/graphql',
  });

  const authLink = setContext((_, { headers }) => {
    const accessToken: AccessToken = getAccessToken(context) || '';
    return {
      headers: {
        ...headers,
        ...(accessToken ? { authorization: `Bearer ${accessToken}` } : {}),
      },
    };
  });
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};

export const initializeApollo = ({
  initialState = null,
  context,
}: {
  initialState?: NormalizedCacheObject | null;
  context?: GetServerSidePropsContext;
}): ApolloClient<NormalizedCacheObject> => {
  const tempApolloClient = apolloClient ?? createApolloClient(context);

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = tempApolloClient.extract();

    // Merge the initialState from getStaticProps/getServerSideProps in the existing cache
    const data = merge(existingCache, initialState, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter(d => sourceArray.every(s => d !== s)),
      ],
    });

    // Restore the cache with the merged data
    tempApolloClient.cache.restore(data);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return tempApolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = tempApolloClient;

  return tempApolloClient;
};

export default initializeApollo({});

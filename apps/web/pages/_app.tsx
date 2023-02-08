// import 'antd/dist/antd.css';
import { ApolloProvider } from '@apollo/client';
import { AuthProvider } from 'contexts/auth';
import apolloClient from 'lib/apollo-client';
import { AppProps } from 'next/app';
import Head from 'next/head';
// import { appWithTranslation } from 'next-i18next';
const noOverlayWorkaroundScript = `
  window.addEventListener('error', event => {
    event.stopImmediatePropagation()
  })

  window.addEventListener('unhandledrejection', event => {
    event.stopImmediatePropagation()
  })
`;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/naming-convention
const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ApolloProvider client={apolloClient}>
      <Head>
        {process.env.NODE_ENV !== 'production' && (
          <script dangerouslySetInnerHTML={{ __html: noOverlayWorkaroundScript }} />
        )}
        <title>FullStack Turobopack Starter</title>
      </Head>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ApolloProvider>
  );
};

export default App;
// export default appWithTranslation(App);

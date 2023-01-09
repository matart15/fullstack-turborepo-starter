// import { Amplify } from "aws-amplify";
// import awsconfig from "../aws-exports";
import '@aws-amplify/ui-react/styles.css';

// import 'antd/dist/antd.css';
import { ApolloProvider } from '@apollo/client';
// import { ThemeProvider } from '@aws-amplify/ui-react';
import { AuthProvider } from 'contexts/auth';
import apolloClient from 'lib/apollo-client';
import { AppProps } from 'next/app';
import Head from 'next/head';
// import { appWithTranslation } from 'next-i18next';
// import { studioTheme } from 'ui';
// Amplify.configure(awsconfig);
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
      {/* <ThemeProvider theme={studioTheme}> */}
      <Head>
        {process.env.NODE_ENV !== 'production' && (
          <script dangerouslySetInnerHTML={{ __html: noOverlayWorkaroundScript }} />
        )}
        <title>FullStack Turobopack Starter</title>
      </Head>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
      {/* </ThemeProvider> */}
    </ApolloProvider>
  );
};

export default App;
// export default appWithTranslation(App);

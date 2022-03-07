import Document, { Head, Html, Main, NextScript } from 'next/document';

class WebDocument extends Document {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render(): JSX.Element {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default WebDocument;

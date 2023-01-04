import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
  GetStaticPropsContext,
  PreviewData,
} from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ParsedUrlQuery } from 'querystring';

export const addTranslationStaticProps: (callback: GetStaticProps) => GetStaticProps =
  (callback: GetStaticProps) => async (ctx: GetStaticPropsContext<ParsedUrlQuery, PreviewData>) => {
    const translationProps = await serverSideTranslations(ctx.locale || 'en', ['common']);
    const pageProps = await callback(ctx);
    // return { ...props, ...{ props: translationProps } };
    if (!('props' in pageProps)) {
      return {
        ...pageProps,
        props: {
          translationProps,
        },
      };
    }
    return {
      ...pageProps,
      props: {
        ...pageProps.props,
        translationProps,
      },
    };
  };

export const addTranslationServerSideProps: (callback: GetServerSideProps) => GetServerSideProps =
  (callback: GetServerSideProps) => async (ctx: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>) => {
    const translationProps = await serverSideTranslations(ctx.locale || 'en', ['common']);
    const pageProps = await callback(ctx);
    if (!('props' in pageProps)) {
      return {
        ...pageProps,
        props: {
          translationProps,
        },
      };
    }
    return {
      ...pageProps,
      props: {
        ...pageProps.props,
        translationProps,
      },
    };
  };

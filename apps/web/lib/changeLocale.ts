import { NextRouter } from 'next/router';

export const changeLocale = ({ locale, router }: { locale: string; router: NextRouter }): void => {
  router.push(
    {
      pathname: router.pathname,
      query: router.query,
    },
    router.asPath,
    { locale },
  );
};

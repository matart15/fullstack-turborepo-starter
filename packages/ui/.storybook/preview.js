// import 'antd/dist/antd.css';
// import '../styles/tailwind.css';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { RouterContext } from 'next/dist/shared/lib/router-context'; // next 13 (using next/router) / next 12

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'someDefault',
  },
  nextRouter: {
    // Provider: AppRouterContext.Provider, // next 13 next 13 (using next/navigation)
    Provider: RouterContext.Provider, // next 13 (using next/router) / next < 12
  },
};

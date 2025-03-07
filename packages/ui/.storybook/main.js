module.exports = {
  // core: {
  //   builder: 'webpack5',
  // },
  stories: [
    '../views/**/*.stories.mdx',
    '../views/**/*.stories.@(js|jsx|ts|tsx)',
    '../components/**/*.stories.mdx',
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-next-router',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
    '@storybook/addon-coverage',
    // {
    //   name: '@storybook/preset-create-react-app',
    //   options: {
    //     craOverrides: {
    //       fileLoaderExcludes: ['less'],
    //     },
    //   },
    // },
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  // webpackFinal: async (config) => {
  //   // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  //   // You can change the configuration based on that.
  //   // 'PRODUCTION' is used when building the static version of storybook.

  //   // Make whatever fine-grained changes you need
  //   config.module.rules.push({
  //     test: /\.less$/,
  //     use: [
  //       'style-loader',
  //       'css-loader',
  //       {
  //         loader: 'less-loader',
  //         options: {
  //           lessOptions: {
  //             javascriptEnabled: true,
  //           },
  //         },
  //       },
  //     ],
  //   });

  //   // Return the altered config
  //   return {
  //     ...config,
  //     plugins: config.plugins.filter((plugin) => {
  //       if (plugin.constructor.name === 'ESLintWebpackPlugin') {
  //         return false;
  //       }
  //       return true;
  //     }),
  //   };
  // },
};
